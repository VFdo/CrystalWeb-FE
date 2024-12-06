import React from 'react'
import Header from './header'
import Footer from './footer'
import {Outlet} from 'react-router-dom'
import Home from './home'
import About from './about'
import Services from './services'
import Shop from './shop'
import Signup from '../pages/signUp'
import Login from '../pages/login'
import ForgotPassword from '../pages/ForgotPassword'
import Newsletter from './newsletter'
import Contact from './contact'


const layout = () => {
  return <>
    <Header/>
    <Outlet/>
    <Home/>
    <Newsletter/>
    <Contact/>
    <Footer/>
    <Signup/>
    <Login/>
    <ForgotPassword/>
    
  </>
}

export default layout