import React from 'react'
import HeaderBuyer from '../Components/HeaderBuyer'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
  return (
    <>
    <div>
        <HeaderBuyer/>
        <div className='p-sm-5 p-2'>
        
          <div>
            <h1 className='mb-sm-3 cart' style={{ color: 'rgba(61, 179, 101, 1)' }}>Cart Summary</h1>

            <div>
              <div className='row p-4 p-md-0 w-100 ms-1'>

                {/* Cart products table */}
                <div className='col-sm-8 p-4' style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',backgroundColor:'white' }}>

                  <Table responsive="md" className='align-middle '>
                    <thead>
                      <tr>
                        <th>Sl.no</th>
                        <th>Item</th>
                        <th>Preview</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                     
                    </tbody>
                  </Table>

                  {/* Cart Buttons */}
                  <div className='text-end mt-1 mt-sm-0'>
                    <Button style={{ backgroundColor: 'rgba(61, 179, 101, 1)', fontFamily: "Poppins, sans-serif" }} className='btn rounded-pill  py-2 px-3 border-0 get shadow'>EMPTY CART</Button>
                    
                    <Link to={'/'}><Button style={{ border: 'solid 2px', borderColor: 'rgba(61, 179, 101, 1)', color: 'rgba(61, 179, 101, 1)', fontFamily: "Poppins, sans-serif" }} className='btn rounded-pill ms-2 py-2 px-3  get shadow bg-transparent'>SHOP MORE</Button></Link>
                  </div>
                </div>

                {/* Checkout Section */}
                <div className='col-sm-4 my-3 my-sm-0'>
                  <Card className='border-0 p-2' style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                    <Card.Body>
                      <Card.Title style={{ fontWeight: '500' }}>Total Items : <span>1</span></Card.Title>
                      <Card.Title> Total Amount : <span>$ 98 </span></Card.Title>
                      <Button className='w-100 btn rounded-pill  py-2 px-3 border-0 shadow' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', fontFamily: "Poppins, sans-serif" }}>CHECKOUT</Button>
                    </Card.Body>
                  </Card>
                </div>

              </div>
            </div>
          </div>
          

        
      </div>
        <Footer/>
    </div>
    </>
  )
}

export default Cart