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
      border: '2px solid #000',
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

    const handlePetInputChange = (e) =>{
        onChange({...petData, [e.target.name]: e.target.value})
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
              <TextField name="name" value={petData.name} onChange={handlePetInputChange} />
            </Stack>
            <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
                <FormLabel sx={{minWidth:100}}>Animal Type</FormLabel>
                <TextField select label="Select type" sx={{flex:1}}
                    name="typeOfAnimal"
                    value={petData.typeOfAnimal}
                    onChange={handlePetInputChange}
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
                    name="dob"
                    value={petData.dob}
                    onChange={handlePetInputChange}
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

  const AddPetForm = () => {
    // const [data, setData] = useState({ 
    //   name: '', 
    //   typeOfAnimal: '', 
    //   dob: '',
    //   gender:'',
    //   photo:'',
    //   clientRefId:'',
    // });

    const [newPet, setPet] = useState({ 
      name: '', 
      typeOfAnimal: '', 
      dob: '',
      gender:'FEMALE',
      photo:'testbyte',
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

//     const getPet = async () => {
//       try {
//           console.log('Fetching pet...');
//           const fetchUrl = 'http://localhost:8080/pet/' + sessionStorage.getItem('petId')
//           const response = await fetch(fetchUrl, {
//           headers: {
//               'Authorization': sessionStorage.getItem('token'),
//               'Content-Type': 'application/json', 
//               },
//           });
//           if (!response.ok) {
//               throw new Error('Failed to fetch pet data');
//           }
//           const fetchedData = await response.json();
//           console.log('pet data received:', fetchedData);
//           setData({
//               ...data,
//               name: fetchedData.payload.name,
//               typeOfAnimal: fetchedData.payload.typeOfAnimal,
//               dob: fetchedData.payload.dob,
//               gender:fetchedData.payload.gender,
//               photo:fetchedData.payload.photo,
//               clientRefId:fetchedData.payload.clientId,
//             });
//       } catch (error) {
//           console.error('Error during fetch:', error);
//       }
//   };

    const handlePetSave = async(e) =>{
      e.preventDefault()
      const success = await savePet(newPet)
      if(success){
          console.log("pet details saved successfully!")
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
  
    // useEffect(() => {
    //   getPet();
    // }, []);

    return (
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <PetForm petData={newPet} onClose={handleClose} onChange={setPet} onSave={handlePetSave} />
        </Modal>
      </div>
    );
  };
  
  export default AddPetForm;