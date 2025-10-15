import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import HeaderBuyer from '../Components/HeaderBuyer'
import { consumerOrdersAPI } from '../Service/allAPI'

const ConsumerOrders = () => {

    const [orders,setOrders] = useState([])
    console.log(orders);
    

    useEffect(() => {
      getUserOrders()
    }, [])
    

    const getUserOrders = async () =>{
        const token = sessionStorage.getItem('token')
        if(token){
            const reqHeader = {
                "content-type":"application/json",
                "authorization":`Bearer ${token}`
            }
            try{
                const result = await consumerOrdersAPI(reqHeader)
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
        <HeaderBuyer/>
        <h1 className='text-center mb-5 mt-5' style={{ fontWeight: '500', color: 'rgba(61, 179, 101, 1)' }}>Order History</h1>
                <div className='px-5'>
                  <div className='row p-4 text-center' style={{color:'rgba(61, 179, 101, 1)',fontWeight:'500',width:'100%',overflowX:'auto'}}>
                    <span className='col-2'>Products</span>
                    <span className='col-1'>Quantity</span>
                    <span className='col-2'>Address</span>
                    <span className='col-2'>Order date</span>
                    <span className='col-2'>Order Id</span>
                    <span className='col-1'>Total Payment</span>
                    <span className='col-2'>Status</span><span></span>
                  </div>
                  {orders.length>0?
                   [...orders].reverse().map((order,Index)=>(
                    <div key={Index} className='row p-4 text-center d-flex align-items-center mb-3' style={{backgroundColor:'rgba(226, 228, 232, 0.3)', borderRadius:'20px',fontWeight:'500',width:'100%',overflowX:'auto'}}>
                    <span className='col-2'>{order.crop}</span>
                    <span className='col-1'>{order.quantity}</span>
                    <span className='col-2'>{order.address}</span>
                    <span className='col-2'>{new Date(order.orderDate).toLocaleDateString("en-GB").replaceAll('/', '-')}</span>
                    <span className='col-2'>{order.razorpayOrderId}</span>
                    <span className='col-1'>&#8377; {order.totalPrice}</span>
                    <span className='col-2 py-1' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>{order.orderStatus}</span><span></span>
                  </div>
                  ))
                : <h1>No Orders Found</h1> }
                  
                  
                </div>
            <Footer/>
    </div>
    </>
  )
}

export default ConsumerOrders