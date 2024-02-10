import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { TextField, Button, Container, Stack, Paper, Box } from '@mui/material';

const Registraion = () => {
    // const history = useHistory();
    const[errorMessage, setErrorMessage] = useState("")
    const[user, setUser] = useState({
        userName : "",
        password: "",
        email:"",
        role:["CLIENT"],
    })

    const navigate = useNavigate(null) 

    const handleUserInputChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleUserSave = async(e) =>{
        e.preventDefault()
        const success  = await saveUser(user)
        if(success){
            console.log("user registration successful!")
            navigate("/login")
            window.location.reload()
            }else{
                console.log("An error has occured!");
                setErrorMessage("Unable to register user")
            }
            setTimeout(() => {
                setErrorMessage("")
            },4000)
        }
    
    const saveUser = (user) => {
        return new Promise((resolve) => {
            console.log('saving user...', user);
            fetch('http://localhost:8080/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token'),
              },
              body: JSON.stringify(user),
            })
                .then((response) => {
                  if(response.ok){
                    resolve(true)
                    response.json()
                .then((responseData) => {
                        console.log('Data saved:', responseData)
                  })}
                  else {
                    resolve(false)
                  }
              })
              .catch((error) => console.error('Error saving data:', error));
            });        
    };

return(
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center', 
      alignItems: 'center',  
      '& > :not(style)': {
        m: 1,
        p:4, 
        width: 800,
        height: 800,
      },
    }}
  >
    <Paper elevation={3} >
    <React.Fragment>
    {errorMessage && <p className='alert alert-danger'>{errorMessage}</p>}
            <h2>Register Form</h2>
            <br></br>
            <form onSubmit={handleUserSave}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="Username"
                        name='userName'
                        // onChange={e => setFirstName(e.target.value)}
                        value={user.userName}
                        onChange={handleUserInputChange}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="password"
                    variant='outlined'
                    color='primary'
                    label="Password"
                    name='password'
                    // onChange={e => setPassword(e.target.value)}
                    value={user.password}
                    onChange={handleUserInputChange}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="email"
                    variant='outlined'
                    color='primary'
                    label="Email"
                    name='email'
                    // onChange={e => setEmail(e.target.value)}
                    onChange={handleUserInputChange}
                    value={user.email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="primary" type="submit">Register</Button>
            </form>
            <br></br>
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
     
        </React.Fragment>
        </Paper>
        </Box>

    )
};

export default Registraion