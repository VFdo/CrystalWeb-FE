import '../../App.css'
import { useState , useEffect} from "react";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import {TextField} from '@mui/material';
import {MenuItem} from '@mui/material';
import { FormControl, FormLabel } from '@mui/material';
import {Stack} from '@mui/material';


function AppointmentPage() {

  const [formData, setFormData] = useState({
    username: 'name',
    petid: 'ID',
    date: '',
    time: '',
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <>
    <section className="contact-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 text-center">
            <h1 className=" text">Its Quick and Easy</h1>
            <p className=' text fs-2'>We are only a step away from you</p>
        </div>
      </div>
    </div>
  </section>

    <div className='contact-message p-0'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-lg-8 col-md-10 col-sm-12 m-auto'>
                    <div className="card p-5">
                         <h2 className='text-center mb-4'>Make an Appointment here</h2>
                         <h3 className='text-center mb-4'>Open everyday from 9.00AM - 4.30PM</h3>
                         <div className=" d-flex align-items-center justify-content-center">
                           <div className="row g-3">
                                <div className="Appointment">
                                    <form onSubmit={onSubmitHandler}>
                                    <div className="form-group">
                    <label htmlFor="username" className="form-label">Enter your name</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} placeholder='Name' aria-label='Name'/>
        </div>
        <div>
             <label htmlFor="time" className="form-label">Enter Pet ID</label>
             <input  className="form-control" name="time" onChange={onChangeHandler} value={formData.petid} placeholder='id' aria-label='Pet ID'/>
        </div>
        <div className="form-group">
          <label htmlFor="date" className="form-label">Appointment Date</label>
          <input type="date" className="form-control" name="date" onChange={onChangeHandler} value={formData.date} placeholder='date' aria-label='Appointment date'/>
        </div>
        <div className="form-group">
          <label htmlFor="time" className="form-label">Appointment Time</label>
          <input type="time" className="form-select" name="time" onChange={onChangeHandler} value={formData.time} placeholder='time' aria-label='time'/>
        </div>
        <div className="form-group">
          <button id="button-link" type="submit" >Submit</button>
        </div>
      </form>
    </div>
                            </div> 
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  );
}

export default AppointmentPage;
