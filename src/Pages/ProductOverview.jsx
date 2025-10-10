import React, { useContext, useEffect, useState } from 'react'
import HeaderBuyer from '../Components/HeaderBuyer'
import Footer from '../Components/Footer'
import { addWishlistAPI, addWishlistFromViewAPI, checkWishlistAPI, cropOverviewAPI, removeFromWishlistAPI } from '../Service/allAPI'
import { useNavigate, useParams } from 'react-router-dom'
import SERVER_URL from '../Service/serverUrl'
import { toast } from 'react-toastify'
import { ResponseContext } from '../Context/ContextAPI'

const ProductOverview = () => {

    const [viewCrop, setViewCrop] = useState({})
    console.log(viewCrop);


    const { id } = useParams()

    useEffect(() => {
        cropOverview()
    }, [])


    const cropOverview = async () => {
        const token = sessionStorage.getItem('token')

        if (token) {
            const reqHeader = {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }

            try {
                const result = await cropOverviewAPI(id, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    setViewCrop(result.data)
                }
                if (result.status == 401) {
                    console.log(result.response.data);

                }

            }
            catch (err) {
                console.log(err);

            }
        }
    }

    const [isWishlisted, setIsWishlisted] = useState(false);

    const { setRemoveWishlistResponse } = useContext(ResponseContext)
    const { setAddWishlistResponse } = useContext(ResponseContext)
    const navigate = useNavigate()

    useEffect(() => {
        checkWishlist()
    }, [])


    const checkWishlist = async () => {
        const { _id, name, price, description, quantity, cropImage, farmerId } = viewCrop[0]
        if (_id && name && price && description && quantity && cropImage && farmerId) {
            const token = sessionStorage.getItem('token')
            if (token) {
                const reqHeader = {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
                }
                try {
                    const result = await checkWishlistAPI(viewCrop[0], reqHeader);
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
        const { _id, name, price, description, quantity, cropImage, farmerId } = viewCrop[0]

        if (_id && name && price && description && quantity && cropImage && farmerId) {
            const token = sessionStorage.getItem('token')
            if (token) {
                const reqHeader = {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
                }

                try {
                    const result = await addWishlistAPI(viewCrop[0], reqHeader)
                    console.log(result);
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
            else {
                toast.error("Hey! Log in to start building your wishlist 💚")
                setTimeout(() => {
                    navigate('/consumer-login')
                }, 2000);
            }
        }
    }

    const removeFromWishlist = async () => {
        const { _id, name, price, description, quantity, cropImage, farmerId } = viewCrop[0]

        if (_id && name && price && description && quantity && cropImage && farmerId) {
            const token = sessionStorage.getItem('token')
            if (token) {
                const reqHeader = {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
                }

                try {
                    const result = await removeFromWishlistAPI(viewCrop[0], reqHeader)
                    console.log(result);
                    if (result.status == 200) {
                        toast.info(`${viewCrop[0].name} removed from Wishlist`)
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

    return (
        <>
            <div>
                <HeaderBuyer />
                <div className='mt-5 d-flex justify-content-center'>
                    <div className='w-75 row d-flex align-items-center p-4' style={{ overflow: 'hidden' }}>
                        <div className='col-6 p-0 d-flex justify-content-center'>
                            <img src={`${SERVER_URL}/uploads/${viewCrop[0]?.cropImage}`} alt="" className='w-75 p-3' style={{ borderRadius: '40px', border: 'solid 2px rgba(61, 179, 101, 1)' }} />
                        </div>
                        <div className='d-flex flex-column col-6 p-5' style={{ backgroundColor: 'white', borderRadius: '40px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
                            <h2 style={{ color: 'rgba(61, 179, 101, 1)', fontWeight: '600', letterSpacing: '1px' }}>{viewCrop[0]?.name}</h2>
                            <span className='text-secondary mt-2'>{viewCrop[0]?.description}</span>
                            <div className='d-flex flex-column text-secondary mt-2 mb-2'>
                                <span className='' style={{ color: 'rgba(61, 179, 101, 1)', fontWeight: '500', fontSize: '18px' }}>Quantity : {viewCrop[0]?.quantity} </span>
                            </div>
                            <span className='fs-3' style={{ fontWeight: '600' }}>$ {viewCrop[0]?.price}</span>
                            <div className='d-flex  gap-2 justify-content-between mt-4'>
                                <button onClick={handleWishlist} className='btn text-light px-5' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '30px', fontWeight: '500' }}>{isWishlisted ? (
                                    <>
                                        Wishlist <i className="fa-solid fa-heart"></i>
                                    </>
                                ) : (
                                    <>
                                        Wishlist <i className="fa-regular fa-heart"></i>
                                    </>
                                )}</button>
                                <button className='btn text-light px-5' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '30px', fontWeight: '500' }}>Add to cart <i class="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ProductOverview