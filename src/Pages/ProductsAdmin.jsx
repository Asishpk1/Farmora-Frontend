import React from 'react'
import ProductCard from '../Components/ProductCard'
import HeaderBuyer from '../Components/HeaderBuyer'
import Footer from '../Components/Footer'

const ProductsAdmin = () => {
  return (
    <>
    <div>
        <HeaderBuyer isadminDash/>
        <div className="d-flex justify-content-center gap-5 flex-wrap mt-5 pb-5 p-5">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default ProductsAdmin