import React from 'react'
import HeaderFarmer from '../Components/HeaderFarmer'
import { Table } from 'react-bootstrap'

const FarmerOrders = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <HeaderFarmer/>
            <div className='col-md-10 p-5'>
                <h1 className='text-center mb-5' style={{ fontWeight: '500', color: 'rgba(61, 179, 101, 1)' }}>Order History</h1>
                <div className='px-5'>
                  <div className='row p-4 text-center' style={{color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>
                    <span className='col-2'>Products</span>
                    <span className='col-2'>User</span>
                    <span className='col-2'>Order date</span>
                    <span className='col-2'>Address</span>
                    <span className='col-2'>Total Payment</span>
                    <span className='col-2'>Status</span><span></span>
                  </div>
                  <div className='row p-4 text-center d-flex align-items-center mb-3' style={{backgroundColor:'rgba(226, 228, 232, 0.3)', borderRadius:'30px',fontWeight:'500'}}>
                    <span className='col-2'>Rice, Wheat, Corn</span>
                    <span className='col-2'>Max</span>
                    <span className='col-2'>20-09-2025</span>
                    <span className='col-2'>Manjeri, Malappuram, Kerala, 676123</span>
                    <span className='col-2'>$ 55</span>
                    <div className='col-2'>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Processing</button>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Shipped</button>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Out for Delivery</button>
                        <button className=' py-1 w-100' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Delivered</button>
                    </div>
                  </div>
                  <div className='row p-4 text-center d-flex align-items-center mb-3' style={{backgroundColor:'rgba(226, 228, 232, 0.3)', borderRadius:'30px',fontWeight:'500'}}>
                    <span className='col-2'>Rice, Wheat, Corn</span>
                    <span className='col-2'>Max</span>
                    <span className='col-2'>20-09-2025</span>
                    <span className='col-2'>Manjeri, Malappuram, Kerala, 676123</span>
                    <span className='col-2'>$ 55</span>
                    <div className='col-2'>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Processing</button>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Shipped</button>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Out for Delivery</button>
                        <button className=' py-1 w-100' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Delivered</button>
                    </div>
                  </div>
                  <div className='row p-4 text-center d-flex align-items-center mb-3' style={{backgroundColor:'rgba(226, 228, 232, 0.3)', borderRadius:'30px',fontWeight:'500'}}>
                    <span className='col-2'>Rice, Wheat, Corn</span>
                    <span className='col-2'>Max</span>
                    <span className='col-2'>20-09-2025</span>
                    <span className='col-2'>Manjeri, Malappuram, Kerala, 676123</span>
                    <span className='col-2'>$ 55</span>
                    <div className='col-2'>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Processing</button>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Shipped</button>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Out for Delivery</button>
                        <button className=' py-1 w-100' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Delivered</button>
                    </div>
                  </div>
                  <div className='row p-4 text-center d-flex align-items-center mb-3' style={{backgroundColor:'rgba(226, 228, 232, 0.3)', borderRadius:'30px',fontWeight:'500'}}>
                    <span className='col-2'>Rice, Wheat, Corn</span>
                    <span className='col-2'>Max</span>
                    <span className='col-2'>20-09-2025</span>
                    <span className='col-2'>Manjeri, Malappuram, Kerala, 676123</span>
                    <span className='col-2'>$ 55</span>
                    <div className='col-2'>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Processing</button>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Shipped</button>
                        <button className=' py-1 w-100 mb-2' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Out for Delivery</button>
                        <button className=' py-1 w-100' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Delivered</button>
                    </div>
                  </div>
                  
                  
                </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default FarmerOrders