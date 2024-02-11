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
    const [data, setData] = useState({ name: '', animalType: '', dateOfBirth: '' });
    // const [open, setOpen] = useState(true);
    const open = true
  
    useEffect(() => {
      console.log('Fetching data...');
      fetch('http://localhost:8080/pet/d4c9b823-928a-453b-8163-5184843625cb')
        .then((res) => res.json())
        .then((fetchedData) => {
          console.log('Data received:', fetchedData);
          setData(fetchedData);
        })
        .catch((err) => {
          console.error('Error during fetch:', err);
        });
    }, []);
  
    const navigate = useNavigate(null) 

    // const handleOpen = () => setOpen(true);
    const handleClose = () => {
      navigate("/pet")
    }
  
    const handleSave = () => {
    console.log('saving...', data);
      fetch('http://localhost:8080/pet/d4c9b823-928a-453b-8163-5184843625cb', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((responseData) => console.log('Data saved:', responseData))
        .catch((error) => console.error('Error saving data:', error));
    };
  
    return (
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <PetForm petData={data} onClose={handleClose} onChange={setData} onSave={handleSave} />
        </Modal>
      </div>
    );
  };
  
  export default PetDetailsForm;