import { useState } from "react";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import {TextField} from '@mui/material';
import {MenuItem} from '@mui/material';
import { FormControl, FormLabel } from '@mui/material';
import {Stack} from '@mui/material';

import InputFileUpload from "../../components/buttons/InputFileUpload";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
  };

function PetDetailsForm() {
    const animalTypes = ['Dog', 'Cat', 'Other'];

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
            <div style={{textAlign:'center'}}>
                <Typography id="modal-modal-title" variant="h4" component="h2" sx={{mb:4}}>
                    Enter Pet Details
                </Typography>
                    <FormControl style={{gap:30}}>
                        <Stack 
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 5 }}>
                            <FormLabel sx={{minWidth:100}}>Name</FormLabel>
                            <TextField></TextField>
                        </Stack>
                        <Stack 
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 5 }}>
                            <FormLabel sx={{minWidth:100}}>Animal Type</FormLabel>
                            <TextField select label="Select type" sx={{flex:1}}>
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
                            <TextField type="date" sx={{flex:1}}></TextField>
                        </Stack>
                        <Stack 
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 5 }}>
                            <FormLabel sx={{minWidth:100}}>Photo</FormLabel>
                            <InputFileUpload></InputFileUpload>
                        </Stack>
                        <br></br>
                        <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 5, sm: 5, md: 12 }}
                        justifyContent="center">
                            <Button variant="outlined" >Cancel</Button>
                            <Button variant="contained" >Save</Button>
                        </Stack>
                        
                    </FormControl>
            </div>
        </Box>
      </Modal>
    </div>
    );
}

export default PetDetailsForm