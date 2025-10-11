import React, { useContext, useEffect, useState } from 'react'
import HeaderBuyer from '../Components/HeaderBuyer'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { clearCartAPI, deleteCartItemAPI, increaseCartQuantityAPI, reduceCartQuantity, viewCartAPI } from '../Service/allAPI';
import SERVER_URL from '../Service/serverUrl';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ResponseContext } from '../Context/ContextAPI';
import { toast } from 'react-toastify';

const Cart = () => {

  const [cartItems, setCartItems] = useState([])
  console.log(cartItems);

  const { setDeleteCartResponse } = useContext(ResponseContext)

  useEffect(() => {
    viewCart()
  }, [])


  const viewCart = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await viewCartAPI(reqHeader)
        console.log(result);
        if (result.status == 200) {
          setCartItems(result.data)
        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const decreaseQuantity = async (crop) => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await reduceCartQuantity(crop, reqHeader)
        console.log(result);
        if (result.status == 200) {
          viewCart()
          setDeleteCartResponse(result)
          toast.info(result.data)
        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const increaseQuantity = async (crop) => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await increaseCartQuantityAPI(crop, reqHeader)
        console.log(result);
        if (result.status == 200) {
          viewCart()
        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const deleteCartItem = async (crop) => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await deleteCartItemAPI(crop?._id, reqHeader)
        console.log(result);
        if (result.status == 200) {
          setDeleteCartResponse(result)
          toast.info(`${result.data.name} removed from cart`)
          viewCart()
        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const clearCart = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await clearCartAPI(reqHeader)
        console.log(result);
        if (result.status == 200) {
          setDeleteCartResponse(result)
          toast.info("Whoosh! Your cart has been swept clean")
          viewCart()
        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }


  return (
    <>
      <div>
        <HeaderBuyer />
        <div className='p-sm-5 p-2'>
          {cartItems.length > 0 ?
            <div>
              <h1 className='mb-sm-3 cart' style={{ color: 'rgba(61, 179, 101, 1)' }}>Cart Summary</h1>

              <div>
                <div className='row d-flex align-items-start p-4 p-md-0 w-100 ms-1'>

                  {/* Cart products table */}
                  <div className='col-sm-8 p-4' style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>

                    <Table responsive="md" className='align-middle'>
                      <thead>
                        <tr>
                          <th>Sl.no</th>
                          <th>Item</th>
                          <th>Preview</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>

                        {cartItems.map((cartItem, Index) => (
                          <tr key={Index}>
                            <td>{Index + 1}</td>
                            <td>{cartItem.name}</td>
                            <td><img src={`${SERVER_URL}/uploads/${cartItem?.cropImage}`} alt="" style={{ width: '40px' }} /></td>
                            <td> <button onClick={() => { decreaseQuantity(cartItem) }} className='border-0 rounded'>-</button> &nbsp; {cartItem.cartQuantity} &nbsp; <button onClick={() => { increaseQuantity(cartItem) }} className='border-0 rounded'>+</button></td>
                            <td>&#8377; {cartItem.price * cartItem.cartQuantity}</td>
                            <td><button onClick={() => { deleteCartItem(cartItem) }} className='btn p-0'><i className='fa-solid fa-trash text-success'></i></button></td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>


                    {/* Cart Buttons */}
                    <div className='text-end mt-1 mt-sm-0'>
                      <Button onClick={clearCart} style={{ backgroundColor: 'rgba(61, 179, 101, 1)', fontFamily: "Poppins, sans-serif" }} className='btn rounded-pill  py-2 px-3 border-0 get shadow'>EMPTY CART</Button>

                      <Link to={'/'}><Button style={{ border: 'solid 2px', borderColor: 'rgba(61, 179, 101, 1)', color: 'rgba(61, 179, 101, 1)', fontFamily: "Poppins, sans-serif" }} className='btn rounded-pill ms-2 py-2 px-3  get shadow bg-transparent'>SHOP MORE</Button></Link>
                    </div>
                  </div>

                  {/* Checkout Section */}
                  <div className='col-sm-4 my-3 my-sm-0'>
                    <Card className='border-0 p-2' style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                      <Card.Body>
                        <Card.Title style={{ fontWeight: '500' }}>Address</Card.Title>
                       <textarea className='form-control' rows="3" placeholder="House No, Street, Area, City, Pincode"></textarea>
                      </Card.Body>
                    </Card>
                    <Card className='border-0 p-2 mt-5' style={{ borderRadius: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                      <Card.Body>
                        <Card.Title style={{ fontWeight: '500' }}>Total Items : <span>{cartItems.length}</span></Card.Title>
                        <Card.Title> Total Amount : <span>&#8377; {cartItems.reduce((total, item) => {
                          return total + item.price * item.cartQuantity;
                        }, 0)} </span></Card.Title>
                        <Button className='w-100 btn rounded-pill  py-2 px-3 border-0 shadow' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', fontFamily: "Poppins, sans-serif" }}>CHECKOUT</Button>
                      </Card.Body>
                    </Card>
                  </div>

                </div>
              </div>
            </div>


            :
            <div className='d-flex flex-column align-items-center w-100 mb-4'>
              {/* <img className='cartimg'  src={cartempty} alt="" style={{width:'25%'}} /> */}
              <DotLottieReact
                src="https://lottie.host/66c36631-c41c-4b17-9c11-99a46bfe5ca6/EYqG0aA6w6.lottie"
                loop
                autoplay
                className='w-50'
              />
              <h4 style={{ color: 'rgba(61, 179, 101, 1)' }}>Your Cart is empty</h4>
              <Link to={'/'}><Button style={{
                backgroundColor: "rgba(61, 179, 101, 1)",
              }} className='btn rounded-pill  py-2 px-4 border-0 get shadow mt-sm-2 mt-0'>Go Home</Button></Link>
            </div>}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Cart