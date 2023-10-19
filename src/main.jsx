import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx' - example : to remove later
import './index.css'
import PetDetailsForm from './pages/pet/PetDetailsForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <PetDetailsForm />
  </React.StrictMode>,
)
