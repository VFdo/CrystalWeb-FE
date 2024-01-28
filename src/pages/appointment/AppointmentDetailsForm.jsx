/* eslint-disable react/prop-types */
import { useState , useEffect} from "react";
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
  
  const AppointmentForm = ({ appointmentData, onClose, onChange, onSave }) => {
    
    const handleIdChange = (event) => {
        onChange({ ...appointmentData, id: event.target.value });
    };
    const handleDateChange = (event) => {
        onChange({...appointmentData, appointmentDate: event.target.value});
    }
    const handleTimeChange = (event) => {
        onChange({ ...appointmentData, id: event.target.value });
    };
    
    
    
    return (
      <Box sx={styles.modalBox}>
        <div style={styles.formContainer}>
          <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
            Fill Appointment Information
          </Typography>
          <FormControl style={styles.formControl}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 5 }}>
              <FormLabel sx={{ minWidth: 100 }}>Enter Pet ID</FormLabel>
              <TextField value={appointmentData.id} onChange={handleIdChange} 
                 helperText="Please enter your pets ID number"
                 id="demo-helper-text-misaligned"
                 label="id"/>
            </Stack>

            <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
                <FormLabel sx={{minWidth:100}}>Enter Appointment Date</FormLabel>
                <TextField type="date" sx={{flex:1}}
                    value={appointmentData.appointmentDate}
                    onChange={handleDateChange}
                    helperText="The Clinic is closed on all Sundays and Poya Days"
                    id="demo-helper-text-misaligned"
                ></TextField>
            </Stack>
            <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}>
                <FormLabel sx={{minWidth:100}}>Enter Appointment time</FormLabel>
                <TextField type="time" sx={{flex:1}}
                    value={appointmentData.appointmentTime}
                    onChange={handleTimeChange}
                     helperText="The Appointment times are avail
                     
                      from 9.00AM to 7.00PM"
                    id="demo-helper-text-misaligned"
                ></TextField>
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

  const AppointmentDetailsForm = () => {
    const [data, setData] = useState({ id: '', date: '', time: '' });
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      console.log('Fetching data...');
      fetch('http://localhost:8080/appointment/718efa32-5abd-4337-b8af-a03803f72193')
        .then((res) => res.json())
        .then((fetchedData) => {
          console.log('Data received:', fetchedData);
          setData(fetchedData);
        })
        .catch((err) => {
          console.error('Error during fetch:', err);
        });
    }, []);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleSave = () => {
    console.log('saving...', data);
      fetch('http://localhost:8080/appointment/718efa32-5abd-4337-b8af-a03803f72193', {
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
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <AppointmentForm appointmentData={data} onClose={handleClose} onChange={setData} onSave={handleSave} />
        </Modal>
      </div>
    );
  };
  
  export default AppointmentDetailsForm;