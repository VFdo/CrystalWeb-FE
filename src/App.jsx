
import './App.css'
import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/about'
import Shop from './components/shop'
import Services from './components/services'
import Contact from './components/contact'
import ItemPage from './pages/ItemPage'
import PetPage from './pages/pet/PetPage'
import PetHistory from './pages/pet/PetHistory'


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='about' element={<About/>}/>
        <Route path='shop' element={<Shop/>}/>
        {/* <Route path='services' element={<PetPage titleText = "test" descriptionText = "desc" buttonLeft = "view" buttonRight = "history"/>}/> */}
        <Route path='services' element={<PetHistory/>}/>
        <Route path='contact' element={<Contact/>}/>
          
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
