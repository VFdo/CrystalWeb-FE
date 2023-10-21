import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx' - example : to remove later
import './index.css'
import EmployeeDetailsForm from './pages/employee/EmployeeDetailsForm'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        <EmployeeDetailsForm />
    </React.StrictMode>,
)