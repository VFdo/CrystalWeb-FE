
import './App.css'
import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/about'
import Shop from './components/shop'
import Services from './components/services'
import Contact from './components/contact'
import ItemPage from './pages/ItemPage'


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='about' element={<About/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='services' element={<ItemPage/>}/>
        <Route path='contact' element={<Contact/>}/>
          
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
