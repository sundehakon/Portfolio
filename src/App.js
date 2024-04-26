import { Box, Typography, List, Button, ThemeProvider, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import theme from './theme';
import './App.css';

function App() {
  
  const windowScrollProject = () => {
    window.scrollBy(0, 1000);
  }

  return (
    <div>
    <ThemeProvider theme={theme}>
    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', gap: -10 }}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ marginLeft: 10 }}>
        <Typography sx={{ fontSize: 100, marginBottom: 55, color: '#818181', marginRight: -13 }}>
          Håkon
        </Typography>
        </Box>
      </Box>
      <List sx={{ marginRight: 2 }}>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }} onClick={windowScrollProject}>
            Projects
          </Button>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>
            Blog
          </Button>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, marginLeft: -1, '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>
            Me
          </Button>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>
            Contact
          </Button>
      </List>
      <Typography
        sx={{
          fontSize: 100,
          position: 'absolute',
          color: 'white',
          top: '28%',
          left: '30%', 
          transform: 'translate(-50%, -50%)',
        }}
      >
        Sunde
      </Typography>
      <img
        src='/images/IMG_0903.jpeg'
        alt='Blossoming nature'
        style={{ width: 'auto', height: '100%', minWidth: '79%' }}
      />
    </Box>
    <Box sx={{ textAlign: 'center' }}>
  <Typography variant='h2' sx={{ color: '#818181', marginTop: 4 }}>
    Projects
  </Typography>
  <Typography variant='subtitle1' sx={{ color: '#818181', marginTop: 5 }}>
    Check out my work below!
  </Typography>
  <Grid container spacing={7} justifyContent="center" sx={{ marginTop: 3, marginBottom: 22 }}>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346 }}>
        <CardMedia 
          sx={{ height: 280 }}
          image='/images/havblikk-logo.png'
          title='Logo for Havblikk'
        />
        <hr style={{ width: '90%' }}/> 
        <CardContent>
          <Typography variant='h5'>Hotel Website</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 1 }}>This was created as a project for my programming class at school. It is designed to make hotel reservations easy both for the customer and staff. It aims to provide information about the hotel, meanwhile also providing functionality which makes the hotel experience that much better!</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='https://github.com/sundehakon/Hotell-React/tree/master' target='_blank'>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346 }}>
        <CardMedia 
          sx={{ height: 280 }}
          image='/images/havblikk-logo.png'
          title='Logo for Havblikk'
        />
        <hr style={{ width: '90%' }}/> 
        <CardContent>
          <Typography variant='h5'>Hotel Website</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 1 }}>This was created as a project for my programming class at school. It is designed to make hotel reservations easy both for the customer and staff. It aims to provide information about the hotel, meanwhile also providing functionality which makes the hotel experience that much better!</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='https://github.com/sundehakon/Hotell-React/tree/master' target='_blank'>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346 }}>
        <CardMedia 
          sx={{ height: 280 }}
          image='/images/havblikk-logo.png'
          title='Logo for Havblikk'
        />
        <hr style={{ width: '90%' }}/> 
        <CardContent>
          <Typography variant='h5'>Hotel Website</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 1 }}>This was created as a project for my programming class at school. It is designed to make hotel reservations easy both for the customer and staff. It aims to provide information about the hotel, meanwhile also providing functionality which makes the hotel experience that much better!</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='https://github.com/sundehakon/Hotell-React/tree/master' target='_blank'>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346 }}>
        <CardMedia 
          sx={{ height: 280 }}
          image='/images/havblikk-logo.png'
          title='Logo for Havblikk'
        />
        <hr style={{ width: '90%' }}/> 
        <CardContent>
          <Typography variant='h5'>Hotel Website</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 1 }}>This was created as a project for my programming class at school. It is designed to make hotel reservations easy both for the customer and staff. It aims to provide information about the hotel, meanwhile also providing functionality which makes the hotel experience that much better!</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='https://github.com/sundehakon/Hotell-React/tree/master' target='_blank'>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
</Box>

    </ThemeProvider>
    </div>
  );
}

export default App;

