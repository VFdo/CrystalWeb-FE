import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const styles = {
    formContainer: {
        margin: 16,
      },
}
const cards = [1, 2, 3];
// const titleText = 'Doogo, 8'
// const descriptionText = 'Next Appointment Date : yyyy-MM-DD'
// const buttonLeft = 'Alerts'
// const buttonRight = 'History'
const PetPage = ({ props }) => {
    console.log(props)
    return(
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={styles.formContainer}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                {/* <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                > */}
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                        sx={{ height: 250 }}
                        image="https://source.unsplash.com/random?wallpapers"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="center">
                        value={props.titleText}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center">
                        value={props.descriptionText}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">value={props.buttonLeft}</Button>
                        <Button size="small">value={props.buttonRight}</Button>
                    </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
    );
};

export default PetPage;