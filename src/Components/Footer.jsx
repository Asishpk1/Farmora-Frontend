import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='d-flex justify-content-center mt-5'>
        <div style={{backgroundColor:'rgba(233, 231, 231, 1)', width:'97%', borderRadius:"30px", height:'560px', overflow:'hidden'}} className='shadow pt-5 px-5'>
            <h6 className='text-center fs-3' style={{fontWeight:'600', color:'rgba(61, 179, 101, 1)'}}>Growing connections, harvesting trust.</h6>
            <div className='d-flex justify-content-around mt-5'>
                <div className='d-flex flex-column'>
                    <span style={{color:'rgba(61, 179, 101, 1)',fontWeight:'600', fontSize:'18px'}}>About</span>
                    <Link className='text-decoration-none text-secondary' style={{fontSize:'14px'}} to={'/'}>About Farmora</Link>
                    <Link className='text-decoration-none text-secondary' style={{fontSize:'14px'}} to={'/'}>How it Works</Link>
                    <Link className='text-decoration-none text-secondary' style={{fontSize:'14px'}} to={'/'}>Home</Link>
                </div>
                <div className='d-flex flex-column'>
                    <span style={{color:'rgba(61, 179, 101, 1)',fontWeight:'600', fontSize:'18px'}}>Farmer</span>
                    <Link className='text-decoration-none text-secondary' style={{fontSize:'14px'}} to={'/farmer-login'}>Login</Link>
                    <Link className='text-decoration-none text-secondary' style={{fontSize:'14px'}} to={'/dashboard'}>Dashboard</Link>
                    <Link className='text-decoration-none text-secondary' style={{fontSize:'14px'}} to={'/myOrders'}>Orders</Link>
                </div>
                <div className='d-flex flex-column'>
                    <span style={{color:'rgba(61, 179, 101, 1)',fontWeight:'600', fontSize:'18px'}}>Consumer</span>
                    <Link className='text-decoration-none text-secondary'  style={{fontSize:'14px'}} to={'/consumer-login'}>Login</Link>
                    <Link className='text-decoration-none text-secondary'  style={{fontSize:'14px'}} to={'/cart'}>Cart</Link>
                    <Link className='text-decoration-none text-secondary'  style={{fontSize:'14px'}} to={'/consumer-orders'}>Orders</Link>
                </div>
                <div className='d-flex flex-column'>
                    <span style={{color:'rgba(61, 179, 101, 1)',fontWeight:'600', fontSize:'18px'}}>Legal</span>
                    <span className='text-decoration-none text-secondary'  style={{fontSize:'14px'}}>Privacy Policy</span>
                    <span className='text-decoration-none text-secondary'  style={{fontSize:'14px'}}>Terms & Conditions</span>
                    <span className='text-decoration-none text-secondary'  style={{fontSize:'14px'}}>Refund & Cancellation Policy</span>
                </div>
                
            </div> <br /> <br />

            <div className='d-flex justify-content-center'>
                <h1 className='p-0 m-0' style={{fontSize:'350px', fontWeight:'700', color:'rgba(61, 179, 101, 1)'}}>farmora</h1>
            </div>
        </div>
    </div> <br />
    </>
  )
}

export default Footer