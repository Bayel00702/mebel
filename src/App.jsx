import {Routes,Route} from 'react-router-dom'
import Layout from "./Companents/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product"
import Card from "./Companents/Cart/Card";
import Room from "./pages/Room/Room";
import Notfound from "./pages/Notfound/Notfound";
import React from "react";
import './styles/style.scss'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Checkout from "./pages/Checkout/Checkout";

function App() {

    // const [users, setUsers] = useState([]);
    // ky.extend({
    //     hooks:{
    //         beforeRequest:[]
    //     }
    // });
    // useEffect(() =>{
    //     api('posts?title_like=tempora').json()
    //         .then((res) =>console.log(res))
    //
    // })


  return (
      <>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route path='' element={<Home/>}/>
                  <Route path='about' element={<About/>}/>
                  <Route path='contact' element={<Contact/>}/>
                  <Route path='catalog' element={<Catalog/>}/>
                  <Route path='product/:id' element={<Product/>}/>
                  <Route path='cart' element={<Cart/>}/>
                  <Route path='favorites' element={<Favorites/>}/>
                  <Route path='room' element={<Room/>}/>
                  <Route path='checkout' element={<Checkout/>}/>
                  <Route path='*' element={<Notfound/>}/>
              </Route>


              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
          </Routes>

      </>
  )
}

export default App
