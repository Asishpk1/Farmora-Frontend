import React, { useEffect, useState } from 'react'
import HeaderBuyer from '../Components/HeaderBuyer'
import Footer from '../Components/Footer'
import { allOrdersAPI, consumerOrdersAPI } from '../Service/allAPI'

const AdminOrders = () => {

  const [orders,setOrders] = useState([])
      console.log(orders);
      
  
      useEffect(() => {
        getAllOrders()
      }, [])
      
  
      const getAllOrders = async () =>{
          const token = sessionStorage.getItem('token')
          if(token){
              const reqHeader = {
                  "content-type":"application/json",
                  "authorization":`Bearer ${token}`
              }
              try{
                  const result = await allOrdersAPI(reqHeader)
                  console.log(result);
                  if(result.status == 200){
                      setOrders(result.data)
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
        <HeaderBuyer isadminDash />
        <h1 className='text-center mb-5 mt-5' style={{ fontWeight: '500', color: 'rgba(61, 179, 101, 1)' }}>All Orders</h1>
                <div className="px-5">
    <div 
      className='table-responsive' 
      style={{ overflowX: 'auto', width: '100%' }}
    >
      {/* Table Header Row */}
      <div 
        className='d-flex text-center p-3 fw-bold' 
        style={{ color: 'rgba(61, 179, 101, 1)', minWidth: '900px' }}
      >
        <span className='col-2'>Products</span>
        <span className='col-1'>Consumer</span>
        <span className='col-2'>Merchant ID</span>
        <span className='col-2'>Order date</span>
        <span className='col-2'>Order Id</span>
        <span className='col-1'>Total Payment</span>
        <span className='col-2'>Status</span>
      </div>

      {/* Data Rows */}
      {orders.length > 0 ? (
        [...orders].reverse().map((order, index) => (
          <div 
            key={index} 
            className='d-flex text-center align-items-center mb-3 p-3' 
            style={{ 
              backgroundColor: 'rgba(226, 228, 232, 0.3)', 
              borderRadius: '20px', 
              fontWeight: '500',
              minWidth: '900px' 
            }}
          >
            <span className='col-2'>{order.crop}</span>
            <span className='col-1'>{order.consumerName}</span>
            <span className='col-2'>{order.farmerId}</span>
            <span className='col-2'>
              {new Date(order.orderDate).toLocaleDateString("en-GB").replaceAll('/', '-')}
            </span>
            <span className='col-2'>{order.razorpayOrderId}</span>
            <span className='col-1'>&#8377; {order.totalPrice}</span>
            <span 
              className='col-2 py-1' 
              style={{ 
                border: 'solid 1px rgba(61, 179, 101, 1)', 
                borderRadius: '30px', 
                backgroundColor: 'rgba(210, 240, 221, 1)', 
                color: 'rgba(61, 179, 101, 1)', 
                fontWeight: '500' 
              }}
            >
              {order.orderStatus}
            </span>
          </div>
        ))
      ) : (
        <div 
          className='text-center py-5' 
          style={{ color: '#999', fontWeight: '500' }}
        >
          🚜 No Orders Found. Your sales journey begins soon! 🌱
        </div>
      )}
    </div>
  </div>
            <Footer/>
    </div>
    </>
  )
}

export default AdminOrders