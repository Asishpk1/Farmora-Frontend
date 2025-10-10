import React from 'react'
import HeaderBuyer from '../Components/HeaderBuyer'
import Footer from '../Components/Footer'

const AdminOrders = () => {
  return (
    <>
    <div>
        <HeaderBuyer isadminDash />
        <h1 className='text-center mb-5 mt-5' style={{ fontWeight: '500', color: 'rgba(61, 179, 101, 1)' }}>Order History</h1>
                <div className='px-5'>
                  <div className='row p-4 text-center' style={{color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>
                    <span className='col-2'>Products</span>
                    <span className='col-2'>User</span>
                    <span className='col-2'>Order date</span>
                    <span className='col-2'>Farmer</span>
                    <span className='col-2'>Total Payment</span>
                    <span className='col-2'>Status</span><span></span>
                  </div>
                  <div className='row p-4 text-center d-flex align-items-center mb-3' style={{backgroundColor:'rgba(226, 228, 232, 0.3)', borderRadius:'20px',fontWeight:'500'}}>
                    <span className='col-2'>Rice, Wheat, Corn</span>
                    <span className='col-2'>Max</span>
                    <span className='col-2'>20-09-2025</span>
                    <span className='col-2'>Asish</span>
                    <span className='col-2'>$ 55</span>
                    <span className='col-2 py-1' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Processing</span><span></span>
                  </div>
                  <div className='row p-4 text-center d-flex align-items-center mb-3' style={{backgroundColor:'rgba(226, 228, 232, 0.3)', borderRadius:'20px',fontWeight:'500'}}>
                    <span className='col-2'>Rice, Wheat, Corn</span>
                    <span className='col-2'>Max</span>
                    <span className='col-2'>20-09-2025</span>
                    <span className='col-2'>Asish</span>
                    <span className='col-2'>$ 55</span>
                    <span className='col-2 py-1' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Processing</span><span></span>
                  </div>
                  <div className='row p-4 text-center d-flex align-items-center mb-3' style={{backgroundColor:'rgba(226, 228, 232, 0.3)', borderRadius:'20px',fontWeight:'500'}}>
                    <span className='col-2'>Rice, Wheat, Corn</span>
                    <span className='col-2'>Max</span>
                    <span className='col-2'>20-09-2025</span>
                    <span className='col-2'>Asish</span>
                    <span className='col-2'>$ 55</span>
                    <span className='col-2 py-1' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Processing</span><span></span>
                  </div>
                  <div className='row p-4 text-center d-flex align-items-center mb-3' style={{backgroundColor:'rgba(226, 228, 232, 0.3)', borderRadius:'20px',fontWeight:'500'}}>
                    <span className='col-2'>Rice, Wheat, Corn</span>
                    <span className='col-2'>Max</span>
                    <span className='col-2'>20-09-2025</span>
                    <span className='col-2'>Asish</span>
                    <span className='col-2'>$ 55</span>
                    <span className='col-2 py-1' style={{border:'solid 1px rgba(61, 179, 101, 1)', borderRadius:'30px', backgroundColor:'rgba(210, 240, 221, 1)', color:'rgba(61, 179, 101, 1)',fontWeight:'500'}}>Processing</span><span></span>
                  </div>
                  
                </div>
            <Footer/>
    </div>
    </>
  )
}

export default AdminOrders