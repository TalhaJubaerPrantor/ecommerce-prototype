
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import ProductDet from './Components/ProductDetails/ProductDet'
import Cart from './Components/Cart/Cart'
import SignUp from './Components/SignUp/SignUp'
import LogIn from './Components/LogIn/LogIn'
import UserProfile from './Components/UserProfile/Profile/UserProfile'
import EditProfile from './Components/UserProfile/EditProfile/EditProfile'
import Trendings from './Components/Trendings/Trendings'
import Men from './Components/Men/Men'
import Women from './Components/Women/Women'
import Support from './Components/Support/Support'
import AdminHome from './Components/Admin/AdminHome/AdminHome'
import AdminOrders from './Components/Admin/AdminOrders/AdminOrders'
import AdminTraffic from './Components/Admin/AdminTraffic/AdminTraffic'
import AdminSales from './Components/Admin/AdminSales/AdminSales'
import AdminPerformance from './Components/Admin/AdminPerformance/AdminPerformance'
import PostProduct from './Components/Admin/AdminProduct/PostProduct/PostProduct'
import DeleteProduct from './Components/Admin/AdminProduct/DeleteProduct/DeleteProduct'
import EditProduct from './Components/Admin/AdminProduct/EditProduct/EditProduct'
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin'

function App() {

  return (
    <>

    <Routes>

      <Route path='/' element={<Home/>}/>    
      <Route path='/trendings' element={<Trendings/>}/>    
      <Route path='/men' element={<Men/>}/>    
      <Route path='/women' element={<Women/>}/>    
      <Route path='/support' element={<Support/>}/>    

      <Route path='/productdetails' element={<ProductDet/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/profile/edit' element={<EditProfile/>}/>
      
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/admin/home' element={<AdminHome/>}/>
      <Route path='/admin/product/post' element={<PostProduct/>}/>
      <Route path='/admin/product/delete' element={<DeleteProduct/>}/>
      <Route path='/admin/product/edit' element={<EditProduct/>}/>

      <Route path='/admin/orders' element={<AdminOrders/>}/>
      <Route path='/admin/traffic' element={<AdminTraffic/>}/>
      <Route path='/admin/sales' element={<AdminSales/>}/>
      <Route path='/admin/performance' element={<AdminPerformance/>}/>

    </Routes>
    

    </>
  )
}

export default App
