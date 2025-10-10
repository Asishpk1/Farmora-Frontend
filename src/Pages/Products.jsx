import { useEffect, useState } from "react"
import Footer from "../Components/Footer"
import HeaderBuyer from "../Components/HeaderBuyer"
import ProductCard from "../Components/ProductCard"
import { allCropsAPI } from "../Service/allAPI"


const Products = () => {

  const [allCrops,setAllCrops] = useState([])
  console.log(allCrops);

  useEffect(() => {
    getAllCrops()
  }, [])
  

  const getAllCrops = async () =>{
    const token = sessionStorage.getItem('token')
    
    if(token){
      const reqHeader = {
        "content-type":"application/json",
        "authorization": `Bearer ${token}`
      }

      try{
        const result = await allCropsAPI(reqHeader)
        console.log(result);
        console.log("REsult");
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
        <HeaderBuyer/>
        <div className="d-flex justify-content-center gap-5 flex-wrap mt-5 pb-5 p-5">
            {allCrops.length>0?
            allCrops.map((crop,index)=>(
              <ProductCard key={index} crop={crop}/>
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