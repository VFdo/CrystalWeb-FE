import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



const Login = () => {
    const[errorMessage,setErrorMessage] = useState("")
    const[login,setLogIn] = useState({
        username : "",
        password: ""
    })

    const navigate = useNavigate(null) 

    const handleInputChange = (e) =>{
        setLogIn({...login, [e.target.name]: e.target.value})
    }

    const handleLogin = async(e) =>{
        e.preventDefault()
        const success  = await loginUser(login)
        if(success){
            console.log("login successful!")
            navigate("/")
            window.location.reload()
            }else{
                console.log("An error has occured!");
                setErrorMessage("Invalid username or password.")
            }
            setTimeout(() => {
                setErrorMessage("")
            },4000)
        }
    const loginUser = (login) => {
        return new Promise((resolve) => {
            console.log('attempting login...', login);
            fetch('http://localhost:8080/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
            })
            .then((response) => {
                if(response.ok){
                    resolve(true)
                    response.json()
            .then((responseData) => {
                sessionStorage.setItem('token', 'Bearer ' + responseData.token)
                sessionStorage.setItem('dataId', responseData.dataId)
                console.log('Data saved')
            })
                } else {
                    resolve(false)
                }
            })
            .catch((error) => console.error('Error saving data:', error));
        })
        };
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', 
        alignItems: 'center',  
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 500,
        },
      }}
    >
      <Paper elevation={3} >
    <section className='container col-6 mt-5 mb-5'>
        {errorMessage && <p className='alert alert-danger'>{errorMessage}</p>}
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
            <div className='row-mb-3'>
                <label htmlFor="email" className='col-sm-2 col-form-label'>Username:</label>
                <div>
                    <input 
                    id='username'
                    name='username'
                    type="text"
                    className='form-control'
                    value={login.email} 
                    onChange={handleInputChange} />
                </div>
            </div>
            <div className='row-mb-3'>
                <label htmlFor="password" className='col-sm-2 col-form-label'>Password:</label>
                <div>
                    <input 
                    id='password'
                    name='password'
                    type="password"
                    className='form-control'
                    value={login.password} 
                    onChange={handleInputChange} />
                </div>
            </div>
            <div className='mb-3'>
                <br></br>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{width:'200px'}}
                    >Sign in</button>
                    <br></br><br></br>
                    <span style={{marginLeft: "0px"}}>
                    Don't have an account?<Link to={"/register"}>Register Here</Link>
                    </span>
            </div>
        </form>    
    </section>

    </Paper >
    </Box>
  );
}

export default Login