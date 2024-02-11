/* eslint-disable react/prop-types */
import { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import {TextField} from '@mui/material';
import {MenuItem} from '@mui/material';
import { FormControl, FormLabel } from '@mui/material';
import {Stack} from '@mui/material';

import InputFileUpload from "../../components/buttons/InputFileUpload";

const styles = {
    modalBox: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 800,
      bgcolor: 'background.paper',
      border: '0px solid #000',
      boxShadow: 24,
      p: 5,
    },
    formContainer: {
      textAlign: 'center',
    },
    formControl: {
      gap: 30,
    },
  };
  
  const PetForm = ({ petData, onClose, onChange, onSave }) => {
    const animalTypes = ["dog", "cat", "other"]

    const handleNameChange = (event) => {
        onChange({ ...petData, name: event.target.value });
    };
    const handleTypeChange = (event) => {
        onChange({...petData, animalType: event.target.value});
    }
    const handleDobChange = (event) => {
        onChange({...petData, dateOfBirth: event.target.value});
    }
    
    return (
      <Box sx={styles.modalBox}>
        <div style={styles.formContainer}>
          <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
            Enter Pet Details
          </Typography>
          <FormControl style={styles.formControl}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 5 }}>
              <FormLabel sx={{ minWidth: 100 }}>Name</FormLabel>
              <TextField value={petData.name} onChange={handleNameChange} />
            </Stack>
            <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
                <FormLabel sx={{minWidth:100}}>Animal Type</FormLabel>
                <TextField select label="Select type" sx={{flex:1}}
                    value={petData.typeOfAnimal}
                    onChange={handleTypeChange}
                >
                {animalTypes.map((option) => (
                    // eslint-disable-next-line react/jsx-key
                    <MenuItem value={option}>
                        {option}
                    </MenuItem>
                    ))}
                </TextField>
            </Stack>
            <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
                <FormLabel sx={{minWidth:100}}>Date of Birth</FormLabel>
                <TextField type="date" sx={{flex:1}}
                    value={petData.dob}
                    onChange={handleDobChange}
                ></TextField>
            </Stack>
            <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
                <FormLabel sx={{minWidth:100}}>Photo</FormLabel>
                <InputFileUpload></InputFileUpload>
            </Stack>
            <br></br>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 5, sm: 5, md: 12 }} justifyContent="center">
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="contained" onClick={onSave}>
                Save
              </Button>
            </Stack>
          </FormControl>
        </div>
      </Box>
    );
  };

  const PetDetailsForm = () => {
    const [data, setData] = useState({ 
      name: '', 
      typeOfAnimal: '', 
      dob: '',
      gender:'',
      photo:'',
      clientRefId:'',
    });

    const [newPet, setPet] = useState({ 
      name: '', 
      typeOfAnimal: '', 
      dob: '',
      gender:'FEMALE',
      photo:'',
      clientRefId:sessionStorage.getItem('userId'),
    });

    const[errorMessage, setErrorMessage] = useState("")
    // const [open, setOpen] = useState(true);
    const open = true
  
    const navigate = useNavigate(null) 

    // const handleOpen = () => setOpen(true);
    const handleClose = () => {
      sessionStorage.removeItem('petId');
      navigate("/pet")
    }

    const getPet = async () => {
      try {
          console.log('Fetching pet...');
          const fetchUrl = 'http://localhost:8080/pet/' + sessionStorage.getItem('petId')
          const response = await fetch(fetchUrl, {
          headers: {
              'Authorization': sessionStorage.getItem('token'),
              'Content-Type': 'application/json', 
              },
          });
          if (!response.ok) {
              throw new Error('Failed to fetch pet data');
          }
          const fetchedData = await response.json();
          console.log('pet data received:', fetchedData);
          setData({
              ...data,
              name: fetchedData.payload.name,
              typeOfAnimal: fetchedData.payload.typeOfAnimal,
              dob: fetchedData.payload.dob,
              gender:fetchedData.payload.gender,
              photo:fetchedData.payload.photo,
              clientRefId:fetchedData.payload.clientId,
            });
      } catch (error) {
          console.error('Error during fetch:', error);
      }
  };

    const handlePetSave = async(e) =>{
      e.preventDefault()
      const success = sessionStorage.getItem('petId') === null ? 
               await savePet(data) : 
               await updatePet(data);
      if(success){
          console.log("pet details updated successfully!")
          navigate("/pet")
          // window.location.reload()
          }else{
              console.log("An error has occured!");
              setErrorMessage("Unable to update user")
          }
          setTimeout(() => {
              setErrorMessage("")
          },4000)
      }

      const updatePet = (data) => {
        return new Promise((resolve) => {
            console.log('updating pet...', data);
            const fetchUrl = 'http://localhost:8080/pet/' + sessionStorage.getItem('petId')
            fetch(fetchUrl, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token'),
              },
              body: JSON.stringify(data),
            })
                .then((response) => {
                  if(response.ok){
                    resolve(true)
                    response.json()
                .then((responseData) => {
                        console.log('pet data saved:', responseData)
                  })}
                  else {
                    resolve(false)
                  }
              })
              .catch((error) => console.error('Error saving data:', error));
            });        
    };

    const savePet = (newPet) => {
      return new Promise((resolve) => {
          console.log('saving pet...', newPet);
          fetch('http://localhost:8080/pet', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': sessionStorage.getItem('token'),
            },
            body: JSON.stringify(newPet),
          })
              .then((response) => {
                if(response.ok){
                  resolve(true)
                  response.json()
              .then((responseData) => {
                      console.log('pet data saved:', responseData)
                })}
                else {
                  resolve(false)
                }
            })
            .catch((error) => console.error('Error saving pet:', error));
          });        
  };
  
    useEffect(() => {
      getPet();
    }, []);

    return (
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <PetForm petData={data} onClose={handleClose} onChange={setData} onSave={handlePetSave} />
        </Modal>
      </div>
    );
  };
  
  export default PetDetailsForm;