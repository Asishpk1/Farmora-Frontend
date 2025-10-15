import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import HeaderBuyer from '../Components/HeaderBuyer'
import Footer from '../Components/Footer'
import { ResponseContext } from '../Context/ContextAPI'
import { allCropsAPI } from '../Service/allAPI'

const ProductsAdmin = () => {

  const [allCrops, setAllCrops] = useState([])
    const { searchKey } = useContext(ResponseContext)
  
    useEffect(() => {
      getAllCrops()
    }, [searchKey])
  
  
    const getAllCrops = async () => {
      const token = sessionStorage.getItem('token')
  
      if (token) {
        const reqHeader = {
          "content-type": "application/json",
          "authorization": `Bearer ${token}`
        }
  
        try {
          const result = await allCropsAPI(searchKey, reqHeader)
          // console.log(result);
          if (result.status == 200) {
            setAllCrops(result.data)
          }
        }
        catch (err) {
          console.log(err);
  
        }
      }
    }
  return (
    <>
    <div>
        <HeaderBuyer isadminDash/>
        <div className="d-flex justify-content-center gap-5 flex-wrap mt-5 pb-5 p-5">
            {allCrops.length > 0 ?
                allCrops.map((crop, index) => (
                  <ProductCard key={index} crop={crop} isadminDash={true} />
                ))
                : <h1>No Crops found</h1>
              }
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default ProductsAdmin