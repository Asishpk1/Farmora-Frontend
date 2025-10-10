import { Route, Routes } from 'react-router-dom'
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

function App() {


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
        <Route path='/products' element={<Products/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/dashboard' element={<FarmerDashboard/>} />
        <Route path='/mycrops' element={<MyCrops/>} />
        <Route path='/myOrders' element={<FarmerOrders/>} />
        <Route path='/admin-login' element={<AdminAuth/>} />
        <Route path='/adminDashboard' element={<AdminDashboard/>} />
        <Route path='/adminProducts' element={<ProductsAdmin/>} />
        <Route path='/adminOrders' element={<AdminOrders/>} />
        <Route path='/productOverview/:id' element={<ProductOverview/>} />
        <Route path='/weather' element={<Weather/>} />
      </Routes>
    </>
  )
}

export default App
