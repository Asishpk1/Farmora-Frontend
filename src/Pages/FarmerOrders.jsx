import React, { useEffect, useState } from 'react'
import HeaderFarmer from '../Components/HeaderFarmer'
import { farmerOrdersAPI, updateOrderStatusAPI } from '../Service/allAPI'
import { toast } from 'react-toastify'

const FarmerOrders = () => {

  const [orders,setOrders] = useState([])
      console.log(orders);
      
  
      useEffect(() => {
        getFarmerOrders()
      }, [])
      
  
      const getFarmerOrders = async () =>{
          const token = sessionStorage.getItem('token')
          if(token){
              const reqHeader = {
                  "content-type":"application/json",
                  "authorization":`Bearer ${token}`
              }
              try{
                  const result = await farmerOrdersAPI(reqHeader)
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

      const updateOrderStatus = async (orderId,status) =>{
          const token = sessionStorage.getItem('token')
          if(token){
              const reqHeader = {
                  "content-type":"application/json",
                  "authorization":`Bearer ${token}`
              }
              try{
                  const result = await updateOrderStatusAPI(orderId,{status},reqHeader)
                  console.log(result);
                  if(result.status == 200){
                    getFarmerOrders()
                      toast.success(`Order status updated to ${status}`)
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
    <div className="container-fluid">
  <div className="row">
    <HeaderFarmer />
    <div className="col-md-10 py-5">
      <h1 className="text-center mb-5" style={{ fontWeight: '500', color: '#3DB365' }}>
        Order History
      </h1>

      {/* Scrollable wrapper */}
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: '1000px' }}> {/* Force horizontal scroll under this width */}
          
          {/* Header */}
          <div className="row text-center mb-3 fw-semibold" style={{ color: '#3DB365' }}>
            <div className="col-1">Product</div>
            <div className="col-1">Quantity</div>
            <div className="col-2">Address</div>
            <div className="col-2">Order Date</div>
            <div className="col-2">Order ID</div>
            <div className="col-2">Payment</div>
            <div className="col-2">Status</div>
          </div>

          {/* Rows */}
          {orders.length > 0 ? (
            [...orders].reverse().map((order, index) => (
              <div
                key={index}
                className="p-4 mb-3 d-flex align-items-center justify-content-between"
                style={{
                  backgroundColor: '#e8e9ebff',
                  borderRadius: '20px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  minWidth: '1000px'
                }}
              >
                <div className="col-1 text-center">{order.crop}</div>
                <div className="col-1 text-center">{order.quantity}</div>
                <div className="col-2 text-center">{order.address}</div>
                <div className="col-2 text-center">
                  {new Date(order.orderDate).toLocaleDateString('en-GB').replaceAll('/', '-')}
                </div>
                <div className="col-2 text-center">{order.razorpayOrderId}</div>
                <div className="col-2 text-center">₹ {order.totalPrice}</div>

                {/* Status Buttons */}
                <div className="col-2 d-flex flex-column gap-2">
                  {['Placed', 'Shipped', 'Out for delivery', 'Delivered'].map((status, i) => (
                    <button
                      key={i}
                      className="w-100 py-1"
                      onClick={()=>{updateOrderStatus(order._id,status)}}
                      style={{
                        borderRadius: '30px',
                        border: '1px solid #3DB365',
                        backgroundColor: order.orderStatus === status ? '#3DB365' : 'rgba(210, 240, 221, 1)',
                        color: order.orderStatus === status ? 'white' : '#3DB365',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center text-muted mt-5">No Orders Found</h3>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default FarmerOrders