import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TableComp from './components/TableComp.jsx'
import PetDetailsForm from './pages/pet/PetDetailsForm.jsx'
import EmployeeDetailsForm from './pages/employee/EmployeeDetailsForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <TableComp /> */}
    <EmployeeDetailsForm />

  </React.StrictMode>,
)
