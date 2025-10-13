import React, { useContext, useEffect, useState } from 'react'
import SERVER_URL from '../Service/serverUrl'
import { addToCartAPI, addWishlistAPI, checkWishlistAPI, deleteCropAPI, removeFromWishlistAPI } from '../Service/allAPI'
import { toast } from 'react-toastify'
import { ResponseContext } from '../Context/ContextAPI'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ crop,isWishlist,isFarmerDashboard,isMyCrops }) => {
  
  const [isWishlisted, setIsWishlisted] = useState(false);

  const {setRemoveWishlistResponse} = useContext(ResponseContext)
  const {setAddWishlistResponse,setAddCartResponse,setDeleteCropResponse} = useContext(ResponseContext)
  const navigate = useNavigate()

  useEffect(() => {
    checkWishlist()
  }, [])


  const checkWishlist = async () => {
    const { _id, name, price, description, quantity, cropImage, farmerId } = crop
    if (_id && name && price && description && quantity && cropImage && farmerId) {
      const token = sessionStorage.getItem('token')
      if (token) {
        const reqHeader = {
          "content-type": "application/json",
          "authorization": `Bearer ${token}`
        }
        try {
          const result = await checkWishlistAPI(crop,reqHeader);
          if (result?.data?.existingProduct) {
            setIsWishlisted(true);
          } else {
            setIsWishlisted(false);
          }
        } catch (err) {
          console.log("Error checking wishlist:", err);
        }
      }
    };
  }



  const addWishlist = async () => {
    const { _id, name, price, description, quantity, cropImage, farmerId } = crop

    if (_id && name && price && description && quantity && cropImage && farmerId) {
      const token = sessionStorage.getItem('token')
      const user = JSON.parse(sessionStorage.getItem("user"))
      if (token && user.role == "Consumer") {
        const reqHeader = {
          "content-type": "application/json",
          "authorization": `Bearer ${token}`
        }

        try {
          const result = await addWishlistAPI(crop, reqHeader)
          // console.log(result);
          if (result.status == 200) {
            toast.success(`${result.data.name} added to Wishlist`)
            setIsWishlisted(true);
            setAddWishlistResponse(result)
          }
          if (result.status == 401) {
            toast.error(result.response.data)
          }

        }
        catch (err) {
          console.log(err);

        }
      }
      else{
        toast.info("Hey! Log in as consumer to start building your wishlist 💚")
        setTimeout(() => {
          navigate('/consumer-login')
        }, 2000);
      }
    }
  }

  const removeFromWishlist = async () => {
    const { _id, name, price, description, quantity, cropImage, farmerId } = crop

    if (_id && name && price && description && quantity && cropImage && farmerId) {
      const token = sessionStorage.getItem('token')
      if (token) {
        const reqHeader = {
          "content-type": "application/json",
          "authorization": `Bearer ${token}`
        }

        try {
          const result = await removeFromWishlistAPI(crop, reqHeader)
          // console.log(result);
          if (result.status == 200) {
            toast.info(`${crop.name} removed from Wishlist`)
            setIsWishlisted(false);
            setRemoveWishlistResponse(result)
          }
          if (result.status == 401) {
            toast.error(result.response.data)
          }

        }
        catch (err) {
          console.log(err);

        }
      }
    }
  }

  const handleWishlist = async () => {
    if (isWishlisted) {
      removeFromWishlist()
    } else {
      addWishlist()
    }
  }

  const handleViewProduct = async () =>{
    if(crop.length>0){
      if(isWishlist){
      navigate(`/productOverview/${crop.productId}`)
    }
    else{
      navigate(`/productOverview/${crop._id}`)
    }
    }
    else{
      toast.info("Log in as consumer to see more about this product")
        setTimeout(() => {
          navigate('/consumer-login')
        }, 2000);
    }
  }

  const handleCart = async () =>{
    if(isWishlist){
      const { productId, name, price, description, quantity, cropImage, farmerId, consumerId,isAvailable } = crop

    if (productId && name && price && description && quantity && cropImage && farmerId && isAvailable){
      const token = sessionStorage.getItem('token')
      if (token) {
        const reqHeader = {
          "content-type": "application/json",
          "authorization": `Bearer ${token}`
        }

        try{
          const result = await addToCartAPI({_id:productId,name,price,description,quantity,cropImage,farmerId,consumerId},reqHeader)
          console.log(result);
          if(result.status == 200){
            toast.success(result.data.Message)
            console.log(result.data.Message);
            setAddCartResponse(result)
            
          }
          
        }
        catch(err){
          console.log(err);
          
        }
      }
    }
    else{
      toast.warning(`Oops! ${crop.name} is currently out of stock`)
    }
    }
    else{
      const { _id, name, price, description, quantity, cropImage, farmerId } = crop

    if (_id && name && price && description && quantity && cropImage && farmerId){
      const token = sessionStorage.getItem('token')
      const user = JSON.parse(sessionStorage.getItem("user"))
      if (token && user.role == "Consumer") {
        const reqHeader = {
          "content-type": "application/json",
          "authorization": `Bearer ${token}`
        }

        try{
          const result = await addToCartAPI(crop,reqHeader)
          console.log(result);
          if(result.status == 200){
            toast.success(result.data.Message)
            setAddCartResponse(result)
            
          }
          
        }
        catch(err){
          console.log(err);
          
        }
      }
      else{
      toast.info("Just a step away! Log in as a consumer to lock this deal 🛒")
        setTimeout(() => {
          navigate('/consumer-login')
        }, 2000);
    }
    }
    
    }
  }

  const deleteCrop = async (id)=>{
        const token = sessionStorage.getItem('token')

        if(token){
            const reqHeader={
                "content-type":"application/json",
                "authorization":`Bearer ${token}`
            }

            try{
                const result = await deleteCropAPI(id,reqHeader)
                // console.log(result);
                if(result.status == 200){
                  toast.info(`${crop.name} deleted successfully`)
                  setDeleteCropResponse(result)
                  
                }
                
            }
            catch(err){
                console.log(err);
                
            }
        }
    }
  return (
    <>
      <div  style={{ width: '200px', height: '280px', backgroundColor: 'white', borderRadius: '40px' }} className='p-2 shadow'>
        <div onClick={handleViewProduct} style={{ height: '140px', overflow: 'hidden', borderRadius: '30px' }}><img src={`${SERVER_URL}/uploads/${crop.cropImage}`} alt="" className='w-100' style={{ borderRadius: '30px' }} /></div>
        <div className='py-2 px-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <span>{crop?.name}</span>
            {!isFarmerDashboard && !isMyCrops &&
            (isWishlist?
            <button onClick={removeFromWishlist} className='btn p-0'><i className="fa-solid fa-heart-circle-minus" style={{ color: 'rgba(61, 179, 101, 1)' }}></i></button>
          :
          <button onClick={handleWishlist} className='btn p-0'><i className={`${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart`} style={{ color: 'rgba(61, 179, 101, 1)' }}></i></button>)}
          </div>
          <div style={{ height: '48px' }}><span style={{ fontSize: '12px', color: "grey" }}>{crop.description}</span></div>
          <div className='d-flex justify-content-between align-items-center'>
            <span>{isWishlist? crop?.isAvailable? `${crop.price} $`: <div className='text-danger'>Out of stock</div>:`${crop?.price} $` } </span>
            {!isFarmerDashboard &&
            (!isMyCrops?
            <button onClick={handleCart} style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderBottomRightRadius: '50px', borderTopRightRadius: '12px', borderTopLeftRadius: '18px', borderBottomLeftRadius: '12px', marginRight: '-28px' }} className='p-3 border-0'>
              <i className="fa-solid fa-cart-shopping text-light fa-lg"></i>
            </button>
            : <button onClick={()=>{deleteCrop(crop._id)}} style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderBottomRightRadius: '50px', borderTopRightRadius: '12px', borderTopLeftRadius: '18px', borderBottomLeftRadius: '12px', marginRight: '-28px' }} className='p-3 border-0'><i className='fa-solid fa-trash text-light'></i></button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard