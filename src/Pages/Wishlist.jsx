import React, { useContext, useEffect, useState } from 'react'
import HeaderBuyer from '../Components/HeaderBuyer'
import ProductCard from '../Components/ProductCard'
import Footer from '../Components/Footer'
import { userWishlistAPI } from '../Service/allAPI'
import { ResponseContext } from '../Context/ContextAPI'

const Wishlist = () => {

  const [WishlistCrops,setWishlistCrops] = useState([])
  // console.log(WishlistCrops);
  
  const {removeWishlistResponse} = useContext (ResponseContext)
  

  useEffect(() => {
    ViewUserWishlist()
  }, [removeWishlistResponse])
  

  const ViewUserWishlist = async () =>{
    const token = sessionStorage.getItem('token')

    if(token){
      const reqHeader = {
        "content-type":"application/json",
        "authorization": `Bearer ${token}`
      }

      try{
        const result = await userWishlistAPI(reqHeader)
        console.log(result);
        if(result.status == 200){
          setWishlistCrops(result.data)
        }
        if(result.status == 401){
          console.log(result.response.data);
          
        }
        
      }
      catch(err){
        console.log(err);
        
      }
    }
  }
  return (
    <>
    <div>
        <HeaderBuyer/>

        {/* Wishlist Section */}
        <h1 className='text-center mt-md-5 wishCartHead' style={{color:'rgba(61, 179, 101, 1)', fontWeight:'600'}}>Wishlist</h1>
        <div className="d-flex justify-content-center flex-wrap mt-3 p-md-5 gap-md-5 gap-3">
            {WishlistCrops.length>0?
            WishlistCrops.map((crop,index)=>(
              <ProductCard key={index} crop={crop} isWishlist={true} />
            ))
          : <h1>No Crops found</h1>
          }
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Wishlist