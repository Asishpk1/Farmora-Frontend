import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { useContext, useEffect, useState } from 'react';
import { ResponseContext } from '../Context/ContextAPI';
import { userWishlistAPI, viewCartAPI } from '../Service/allAPI';
import { toast } from 'react-toastify';

const HeaderBuyer = ({ isadminDash,isProductsPage }) => {

  const [WishlistCrops, setWishlistCrops] = useState([])
  // console.log(WishlistCrops);
  const navigate = useNavigate()
  

  const { removeWishlistResponse, addWishlistResponse, addCartResponse, deleteCartResponse,setSearchKey } = useContext(ResponseContext)


  useEffect(() => {
    ViewUserWishlist()
  }, [removeWishlistResponse, addWishlistResponse])


  const ViewUserWishlist = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await userWishlistAPI(reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setWishlistCrops(result.data)
        }
        if (result.status == 401) {
          // console.log(result.response.data);

        }

      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const [cartItems, setCartItems] = useState([])
  // console.log(cartItems);

  useEffect(() => {
    viewCart()
  }, [addCartResponse, deleteCartResponse])


  const viewCart = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await viewCartAPI(reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setCartItems(result.data)
        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const user = JSON.parse(sessionStorage.getItem('user'))
  const handleLogout = async () => {
    sessionStorage.clear()
    toast.info(`Logged out successfully. See you soon, ${user.username} !`)
    setTimeout(() => {
      navigate('/')
    }, 1000);
  }


  return (
    <>
      <Navbar
        expand="md"
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(100, 100, 111, 0.2) 8px 7px 29px 0px",
          borderRadius: "30px",
          width: "95%",
          margin: "1rem auto",
        }}
      >
        <Container fluid className="px-4">
          {/* Brand */}
          <Navbar.Brand className="fs-4 trusted" style={{ fontWeight: "500", color: "rgba(61, 179, 101, 1)" }}>
            <i className="fa-solid fa-seedling"></i> Farmora
          </Navbar.Brand>

          {/* Toggler */}
          <Navbar.Toggle aria-controls="main-navbar" />

          {/* Links and Buttons */}
          <Navbar.Collapse id="main-navbar" className="justify-content-between">
            {/* Left Nav Links */}
            {!isadminDash &&
              <Nav className="align-items-center gap-md-3">
                <Link to={'/'} className='text-decoration-none text-secondary buyerlinks'>Home</Link>
                <Link to={'/products'} className='text-decoration-none text-secondary buyerlinks'>Shop</Link>
                <Link to={'/consumer-orders'} className='text-decoration-none text-secondary buyerlinks'>Orders</Link>
              </Nav>}

            {/* Search Bar */}
            {isadminDash ?
              <Nav className="align-items-center gap-md-3">
                <Link to={'/'} className='text-decoration-none text-secondary buyerlinks'>Home</Link>
                <Link to={'/adminDashboard'} className='text-decoration-none text-secondary buyerlinks'>Dashboard</Link>
                <Link to={'/adminProducts'} className='text-decoration-none text-secondary buyerlinks'>Products</Link>
                <Link to={'/AdminOrders'} className='text-decoration-none text-secondary buyerlinks'>Orders</Link>
              </Nav>
              : isProductsPage && <Form className="d-flex align-items-center justify-content-center my-2 my-md-0 gap-2">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="ps-3  me-1"
                  onChange={(e)=>{setSearchKey(e.target.value)}}
                  style={{
                    borderRadius: "20px",
                    fontSize: "11px",
                    height: "32px",
                    outline: "none",
                    border: "solid 1px rgb(211, 211, 211)",
                  }}
                />
                <i className="fa-solid fa-magnifying-glass" style={{ color: "rgba(61, 179, 101, 1)" }}></i>
              </Form>
            }
            {/* Wishlist, Cart, Logout */}
            <div className="d-flex align-items-center justify-content-center gap-2 mt-2 mt-md-0">
              {!isadminDash &&
                <div className='d-flex'>
                  <Link to={'/wishlist'}>
                    <button className="border-0 bg-transparent">
                      <i className="fa-solid fa-heart fa-lg text-danger"></i>
                      <Badge pill className="px-1 py-0 fs-6 bg-transparent" style={{ color: "black", fontWeight: "500" }}>
                        {WishlistCrops?.length}
                      </Badge>
                    </button>
                  </Link>
                  <Link to={'/cart'}><button className="border-0 bg-transparent">
                    <i className="fa-solid fa-cart-shopping fa-lg text-success"></i>
                    <Badge pill className="px-1 py-0 fs-6 bg-transparent" style={{ color: "black", fontWeight: "500" }}>
                      {cartItems.length}
                    </Badge>
                  </button>
                  </Link>
                </div>}
              <Button
                className="ms-md-5 border-0 px-3"
                size="sm"
                style={{
                  backgroundColor: "rgba(61, 179, 101, 1)",
                  borderRadius: "35px",
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderBuyer