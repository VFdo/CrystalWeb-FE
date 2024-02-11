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
import ListItem from '@mui/material/ListItem';
import InboxIcon from '@mui/icons-material/Inbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const PetPage = () => {

  function generate(element) {
    return [0, 1, 2, 4, 5, 6, 7, 8, 9, 10].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  const [pets, setPets] = useState([]);

  const navigate = useNavigate(null) 

    const handleUpdateClick = () => {
        navigate("/pet-update");
    };

    const handleRecordsClick = () => {
      navigate("/medical-records");
    };

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
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Recent updates...
            </Typography>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
               <Paper elevation={3}>
               <List style={{ width: '400px', maxWidth: '400px', maxHeight: '400px', overflow: 'auto' }}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary="new message..."
                  />
                </ListItem>,
              )}
            </List>
               </Paper>
              
              {/* <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>

            <Container sx={{ py: 8 }} maxWidth="md">

              {/* cards */}
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
                        }}
                        image={pet.photo}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {pet.name}
                        </Typography>
                        <Typography>
                          Next Visit : 
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={handleRecordsClick}>Records</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  ))}
                </Grid>
                </Container>
          
      </Box>


        
    );
};

export default PetPage;