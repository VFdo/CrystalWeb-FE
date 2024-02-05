import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Services from './components/services.jsx'
import Contact from './components/contact.jsx'
import Shop from './components/shop.jsx'
import Register from './components/register.jsx'


const router = createBrowserRouter([
  
  {
    path:'/',
    element :<App/>,
  },
]);
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
