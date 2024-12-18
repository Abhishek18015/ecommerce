import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Signup from './Component/Signup'
import ShopCategory from './Component/ShopCategory'
import Contact from './Component/Contact'
import About from './Component/About'
import CartItem from './Component/CartItem'
import Disclaimer from './Component/Disclaimer';
import Return from './Component/Return'
import Agreement from './Component/Agreement'
import Privacy from './Component/Privacy'
import Services from './Component/Services'
import LoginSignup from './Component/LoginSignup'

  const App = () => {
    
   
    
  
 
  return (
    <>
      <BrowserRouter> 
        <Navbar />
       <Routes>  
        <Route path='/' element={<><div className="posters"></div><Home/> </>} />
       <Route path='Women' element={<><h1>Women's Collection</h1><>
        <div className="posters-women"></div>
      </><ShopCategory category="women" /></> } />
       <Route path='men' element={<><h1>Men's Collection</h1><>
        
        <div className="posters-men"></div>
       </><ShopCategory category="mens" /></> } />
          <Route path='Kid' element={<><h1>Kid's Collection</h1> <>
        
        <div className="posters-kid"></div>
       </><ShopCategory category="kid" /></>} />
       <Route path="/Signup" element={<Signup />} /> 
          <Route path='/Login' element={<LoginSignup />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/CartItem' element={<CartItem />} />
        
          

          

         
          
       </Routes>
      </BrowserRouter>
     
    
    <Footer/>
 
      
    
    </>
  )
};

export default App
