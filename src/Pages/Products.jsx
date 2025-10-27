import { useContext, useEffect, useState } from "react"
import Footer from "../Components/Footer"
import HeaderBuyer from "../Components/HeaderBuyer"
import ProductCard from "../Components/ProductCard"
import { allCropsAPI } from "../Service/allAPI"
import { ResponseContext } from "../Context/ContextAPI"


const Products = () => {

  const [allCrops,setAllCrops] = useState([])
  // console.log(allCrops);

  const {searchKey} = useContext(ResponseContext)
  // console.log(searchKey);
  

  useEffect(() => {
    getAllCrops()
  }, [searchKey])
  

  const getAllCrops = async () =>{
    const token = sessionStorage.getItem('token')
    
    if(token){
      const reqHeader = {
        "content-type":"application/json",
        "authorization": `Bearer ${token}`
      }

      try{
        const result = await allCropsAPI(searchKey,reqHeader)
        // console.log(result);
        if(result.status == 200){
          setAllCrops(result.data)
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
        <HeaderBuyer isProductsPage={true}/>
        
        {/* Products Section */}
        <div className="d-flex justify-content-center gap-3 gap-md-5 flex-wrap mt-md-5 pt-3 p-md-5">
            {allCrops.length>0?
            allCrops.map((crop,index)=>(
              <ProductCard key={index} crop={crop} isProductsPage={true}/>
            ))
            : <h1>No Crops found</h1>
          }
        </div>
        
        <Footer/>
    </div>
    </>
  )
}

export default Products