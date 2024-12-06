import { useState } from "react";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import {TextField} from '@mui/material';
import {MenuItem} from '@mui/material';
import { FormControl, FormLabel } from '@mui/material';
import {Stack} from '@mui/material';


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

function EmployeeDetailsForm() {
    const genderTypes = ['Male', 'Female'];

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
            <Button onClick={handleOpen}>Add Employee</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <div style={{textAlign:'center'}}>
                        <Typography id="modal-modal-title" variant="h4" component="h2" sx={{mb:4}}>
                            Employee Details
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
                                <FormLabel sx={{minWidth:100}}>Age</FormLabel>
                                <TextField></TextField>
                            </Stack>
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 5 }}>
                                <FormLabel sx={{minWidth:100}}>NIC</FormLabel>
                                <TextField></TextField>
                            </Stack>
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 5 }}>
                                <FormLabel sx={{minWidth:100}}>Email</FormLabel>
                                <TextField></TextField>
                            </Stack>
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 5 }}>
                                <FormLabel sx={{minWidth:100}}>Gender</FormLabel>
                                <TextField select label="Select gender type" sx={{flex:1}}>
                                    {genderTypes.map((option) => (
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
                                <FormLabel sx={{minWidth:100}}>Basic Salary</FormLabel>
                                <TextField></TextField>
                            </Stack>
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 5 }}>
                                <FormLabel sx={{minWidth:100}}>Address</FormLabel>
                                <TextField></TextField>
                            </Stack>
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 5 }}>
                                <FormLabel sx={{minWidth:100}}>Contact Number</FormLabel>
                                <TextField></TextField>
                            </Stack>
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 5 }}>
                                <FormLabel sx={{minWidth:100}}>Core Skills</FormLabel>
                                <TextField></TextField>
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

export default EmployeeDetailsForm