import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Stack, Paper, Box } from '@mui/material';

const Profile = () => {
    const userType = sessionStorage.getItem('role')
    const[errorMessage, setErrorMessage] = useState("")
    const[uPass, setPass] = useState('temp')

    const[user, setUser] = useState({
        userName : "",
        password: "",
        email:"",
        role:[""],
    })

    const[client, setClient] = useState({
        name : "",
        nic: "temp",
        address:"",
        phone:[""],
        email:"",
    })

    const navigate = useNavigate(null) 

    const handleEmployeeClick = () => {
        // TODO: add path to Employee Details component
        navigate("/");
    };

    const handleUserInputChange = (e) =>{
        if(e.target.name == "role"){
            const updatedRole = [...user.role]; 
            var index = 0
            if(updatedRole.length != 0){
                index = updatedRole.length+1
            }
            updatedRole[index] = e.target.value; 
            setClient({ ...user, role: updatedRole });
        }
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleClientInputChange = (e) =>{
        if(e.target.name == "phone"){
            const updatedPhone = [...client.phone]; 
            updatedPhone[0] = e.target.value; 
            setClient({ ...client, phone: updatedPhone });
        } else{
            setClient({...client, [e.target.name]: e.target.value})
        }
    }

    const handleUserSave = async(e) =>{
        e.preventDefault()
        const success1  = await saveUser(user)
        var success2 = true
        if(userType == 'CLIENT'){
             success2  = await saveClient(client)
        } 
        if(success1 && success2){
            console.log("user details updated successfully!")
            navigate("/login")
            window.location.reload()
            }else{
                console.log("An error has occured!");
                setErrorMessage("Unable to update user")
            }
            setTimeout(() => {
                setErrorMessage("")
            },4000)
        }
    
    const saveUser = (user) => {
        return new Promise((resolve) => {
            console.log('updating user...', user);
            user.password = uPass
            const fetchUrl = 'http://localhost:8080/user/' + sessionStorage.getItem('userId')
            fetch(fetchUrl, {
              method: 'PUT',
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

    const saveClient = (client) => {
        return new Promise((resolve) => {
            console.log('saving client...', client);
            const fetchUrl = 'http://localhost:8080/client/' + sessionStorage.getItem('dataId')
            fetch(fetchUrl, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token'),
              },
              body: JSON.stringify(client),
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

    const getUser = async () => {
        try {
            console.log('Fetching user...');
            const fetchUrl = 'http://localhost:8080/user/' + sessionStorage.getItem('userId')
            const response = await fetch(fetchUrl, {
            headers: {
                'Authorization': sessionStorage.getItem('token'),
                'Content-Type': 'application/json', 
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const fetchedData = await response.json();
            console.log('user data received:', fetchedData);
            setUser({
                ...user,
                userName: fetchedData.payload.username,
                email: fetchedData.payload.email,
                role: fetchedData.payload.role
              });
            setPass(fetchedData.payload.password)
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };

    const getData = async () => {
        try {
            console.log('Fetching client...');
            const fetchUrl = 'http://localhost:8080/client/' + sessionStorage.getItem('dataId')
            const response = await fetch(fetchUrl, {
            headers: {
                'Authorization': sessionStorage.getItem('token'),
                'Content-Type': 'application/json', 
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch client data');
            }
            const fetchedData = await response.json();
            console.log('client data received:', fetchedData);
            setClient({
                ...client,
                name: fetchedData.payload.name,
                address: fetchedData.payload.address,
                phone: fetchedData.payload.phone,
                email: fetchedData.payload.email
              });
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };

    useEffect(() => {
        getUser();
        if(userType == 'CLIENT'){
            getData();
        }
      }, []);
    
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
            <h2>Update User Details</h2>
            <br></br>
            <form onSubmit={handleUserSave}>
            <div>
            {userType === 'CLIENT' && (
                <div>
                    <TextField
                    type="text"
                    variant='outlined'
                    color='primary'
                    label="Name"
                    name='name'
                    onChange={handleClientInputChange}
                    value={client.name}
                    fullWidth
                    required
                    sx={{mb: 4}}
            />
            <TextField
                type="text"
                variant='outlined'
                color='primary'
                label="Address"
                name="address"
                onChange={handleClientInputChange}
                value={client.address}
                fullWidth
                sx={{mb: 4}}
            />
            <TextField
                type="phone"
                variant='outlined'
                color='primary'
                label="Phone"
                name='phone'
                inputProps={{ maxLength: 10 }}
                onChange={handleClientInputChange}
                value={client.phone}
                fullWidth
                sx={{mb: 4}}
            />
            </div>
            )}
            </div>
            
            <TextField
                    type="email"
                    variant='outlined'
                    color='primary'
                    label="Email"
                    name='email'
                    // onChange={e => setEmail(e.target.value)}
                    onChange={(e) => {
                        handleUserInputChange(e);
                        handleClientInputChange(e);
                      }}
                    value={user.email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <br></br>
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
                    <TextField
                    type="password"
                    variant='outlined'
                    color='primary'
                    label="Password"
                    name='password'
                    // onChange={e => setPassword(e.target.value)}
                    value={user.password}
                    onChange={handleUserInputChange}
                    fullWidth
                    sx={{mb: 4}}
                />
                </Stack>
                <Button variant="outlined" color="primary" type="submit">Update</Button>
            </form>
            <br></br>
            <div>
            {userType !== 'CLIENT' && (
                <Button variant="outlined" color="primary" onClick={handleEmployeeClick}>Update Employee Details</Button>
            )}
            </div>
        </React.Fragment>
        </Paper>
        </Box>

    )
};

export default Profile