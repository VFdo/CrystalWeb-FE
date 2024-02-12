import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import InboxIcon from '@mui/icons-material/Inbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ChatComponent from './ChatComponent';

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
}

const PetPage = () => {
  
  const[errorMessage, setErrorMessage] = useState("")

  const [pets, setPets] = useState([]);

  // chat modal
  const [open, setOpen] = useState(false);
  const handleModalClose = () => {
    sessionStorage.removeItem('petId');
    sessionStorage.removeItem('petName');
    setOpen(false);
  };
  const handleModalOpen = () => {
    setOpen(true);
  };

  // inbox modal
  const [openMessage, setOpenMessage] = useState(false);
  const [mTitle, setmTitle] = useState('')
  const [mBody, setmBody] = useState('')
  const handleMessageModalClose = () => {
    setOpenMessage(false);
  };

  const messages = [
    { 
        title: 'Reminder: Annual Vaccination Due',
        body: 'Dear Pet Owner, This is a reminder that your pet is due for its annual vaccination. Please schedule an appointment with our clinic at your earliest convenience.'
    },
    { 
        title: 'Upcoming Appointment: Dental Checkup',
        body: 'Dear Pet Owner, Just a reminder that your pet has an upcoming dental checkup appointment scheduled for next week. Please ensure your pet is prepared for the visit.'
    },
    { 
        title: 'Important Information: Flea & Tick Season',
        body: 'Dear Pet Owner, As we approach flea and tick season, it\'s crucial to ensure your pet is protected. We recommend discussing preventative measures during your next visit.'
    },
    { 
        title: 'Emergency Preparedness: Pet First Aid',
        body: 'Dear Pet Owner, In case of emergencies, it\'s essential to have basic pet first aid knowledge. We encourage you to attend our upcoming workshop on pet first aid and CPR.'
    },
    { 
        title: 'Holiday Hours Notice',
        body: 'Dear Pet Owner, Please note that our clinic will have modified hours during the upcoming holiday season. We appreciate your understanding and cooperation.'
    }
];

// function generate({title, body}) {
//   return messages.map((message) =>
//    {
//       key: message.title,
//         title: {title},
//         body: {body}, 
//    }
//   );
// }


  const navigate = useNavigate(null) 

    const handleUpdateClick = (petId) => {
        sessionStorage.setItem('petId', petId);
        setTimeout(() => {
          navigate("/pet-update");
      }, 1000);
    };

    const handleRecordsClick = () => {
      navigate("/medical-records");
    };

    const handlePetClick = () => {
      navigate("/pet-add");
    };

    const handleChatClick = (petId, petName) => {
      sessionStorage.setItem('petId', petId);
      sessionStorage.setItem('petName', petName);
      handleModalOpen(true);
      // navigate("/chat");
    };

    const handleListItemClick = (mTitle, mBody) => {
      setmTitle(mTitle);
      setmBody(mBody);
      setOpenMessage(true);
    }
      
  const getPets = async () => {
    try {
        console.log('Fetching pets...');
        // TODO: fix API - pet for client
        const fetchUrl = 'http://localhost:8080/pet' 
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
        console.log('pet data received:', fetchedData);
        const petData = fetchedData.payload.map(pet => ({
          refId: pet.refId,
          name: pet.name,
          dob:pet.dob,
          typeOfAnimal:pet.typeOfAnimal,
          gender:pet.gender,
          photo:"https://source.unsplash.com/random?pets&$" + pet.refId
      }));
      setPets(petData);
    } catch (error) {
        console.error('Error during fetch:', error);
    }
};

useEffect(() => {
  getPets();
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
          width: 800,
          height: 800,
        },
      }}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My Pets
            </Typography>
            {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Recent updates...
            </Typography> */}
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
               <Paper elevation={3}>
               <List style={{ width: '400px', maxWidth: '400px', maxHeight: '400px', overflow: 'auto' }}
               subheader={<ListSubheader color='primary'>Messages</ListSubheader>}
               >
              {messages.map((message) => (
                <ListItemButton item key={message.title} onClick={() => handleListItemClick(message.title, message.body)}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={message.title}
                    secondary={message.body}
                  />
                </ListItemButton>
              ))}
            </List>
               </Paper>
              {/* <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={4}>
                {pets.map((pet) => (
                  <Grid item key={pet.refId} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          // 16:9
                          pt: '80.25%',
                          cursor: 'pointer'
                        }}
                        image={pet.photo}
          
                        onClick={() => handleUpdateClick(pet.refId)}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {pet.name}
                        </Typography>
                        <Typography>
                          Next Visit : {pet.dob}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={handleRecordsClick}>Records</Button>
                        <div style={{ marginLeft: 'auto' }}></div>
                        <Fab 
                        size="small" 
                        color="primary" 
                        aria-label="add"
                        onClick={() => handleChatClick(pet.refId, pet.name)}
                        >
                          <ChatIcon />
                        </Fab>
                      </CardActions>
                    </Card>
                  </Grid>
                  ))}
                </Grid>
                <Fab 
                color="primary" 
                aria-label="add"
                onClick={handlePetClick}
                sx={{ position: 'absolute', bottom: 30, right: 30 }}>
                <AddIcon />
                </Fab>
                </Container>  
                <Modal open={openMessage} onClose={handleMessageModalClose}>
                {/* <Box> */}
                <Paper 
                elevation={3}
                sx={styles.modalBox}>
                <h2>{mTitle}</h2>
                  <p>{mBody}</p>
                </Paper>
                  
                {/* </Box> */}
              </Modal> 
                {open && <ChatComponent open={open} handleClose={handleModalClose} petId={sessionStorage.getItem('petId')} petName={sessionStorage.getItem('petName')}/>} 
      </Box>
    );
};

export default PetPage;