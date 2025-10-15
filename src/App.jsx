import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home'
import FarmerAuth from './Pages/FarmerAuth'
import BuyerAuth from './Pages/BuyerAuth'
import Products from './Pages/Products'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import FarmerDashboard from './Pages/FarmerDashboard'
import MyCrops from './Pages/MyCrops'
import FarmerOrders from './Pages/FarmerOrders'
import AdminDashboard from './Pages/AdminDashboard'
import ProductsAdmin from './Pages/ProductsAdmin'
import AdminOrders from './Pages/AdminOrders'
import ProductOverview from './Pages/ProductOverview'
import Weather from './Pages/Weather'
import AdminAuth from './Pages/AdminAuth'
import ConsumerOrders from './Pages/ConsumerOrders'
import { useContext } from 'react'
import { ResponseContext } from './Context/ContextAPI'

function App() {

  const {isAuthorized,isRole} = useContext(ResponseContext)

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/farmer-login' element={<FarmerAuth/>} />
        <Route path='/farmer-register' element={<FarmerAuth isRegister/>} />
        <Route path='/consumer-login' element={<BuyerAuth/>} />
        <Route path='/consumer-register' element={<BuyerAuth isRegister/>} />
        <Route path='/consumer-orders' element={isAuthorized && isRole.role == "Consumer"?<ConsumerOrders/>:<Navigate to={'/consumer-login'}/>} />
        <Route path='/products' element={isAuthorized && isRole.role == "Consumer"?<Products/>:<Navigate to={'/consumer-login'}/>} />
        <Route path='/wishlist' element={isAuthorized && isRole.role == "Consumer"?<Wishlist/>:<Navigate to={'/consumer-login'}/>} />
        <Route path='/cart' element={isAuthorized && isRole.role == "Consumer"?<Cart/>:<Navigate to={'/consumer-login'}/>} />
        <Route path='/dashboard' element={isAuthorized && isRole.role == "Farmer"?<FarmerDashboard/>:<Navigate to={'/farmer-login'}/>} />
        <Route path='/mycrops' element={isAuthorized && isRole.role == "Farmer"?<MyCrops/>:<Navigate to={'/farmer-login'}/>} />
        <Route path='/myOrders' element={isAuthorized && isRole.role == "Farmer"?<FarmerOrders/>:<Navigate to={'/farmer-login'}/>} />
        <Route path='/admin-login' element={<AdminAuth/>} />
        <Route path='/adminDashboard' element={isAuthorized && isRole.role == "Admin"?<AdminDashboard/>:<Navigate to={'/admin-login'}/>} />
        <Route path='/adminProducts' element={isAuthorized && isRole.role == "Admin"?<ProductsAdmin/>:<Navigate to={'/admin-login'}/>} />
        <Route path='/adminOrders' element={isAuthorized && isRole.role == "Admin"?<AdminOrders/>:<Navigate to={'/admin-login'}/>} />
        <Route path='/productOverview/:id' element={isAuthorized && isRole.role == "Consumer"?<ProductOverview/>:<Navigate to={'/consumer-login'}/>} />
        <Route path='/weather' element={isAuthorized && isRole.role == "Farmer"?<Weather/>:<Navigate to={'/farmer-login'}/>} />
      </Routes>
    </>
  )
}

export default App
