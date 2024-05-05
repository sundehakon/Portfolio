import { Box, Typography, List, Button, ThemeProvider, Grid, Card, CardContent, CardActions, Link, Paper, Modal } from '@mui/material';
import theme from './theme';
import './App.css';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login';
import axios from 'axios';
import LogoutButton from './logout';

function App() {
  const { user } = useAuth0();
  const [blogs, setBlog] = useState([]);
  const [comments, setComment] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (user) {
          const response = await axios.get('http://localhost:9999/api/Blogs');
          setBlog(response.data);
        }
      } catch (error) {
          console.error('Error fetching orders', error);
      }
    };

    const fetchComment = async () => {
      try {
        if (user) {
          const response = await axios.get('http://localhost:9999/api/Comments');
          setComment(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error('Error fetching comments', error);
      }
    };

    fetchBlog();
    fetchComment();
  }, [user, setBlog, setComment]);

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
  };

  const handleClose = () => {
    setSelectedBlog(null);
  };
  
  const windowScrollProject = () => {
    window.scrollBy(0, 963);
  };

  const windowScrollBlog = () => {
    window.scrollBy(0, 2651);
  };

  const windowScrollMe = () => {
    window.scrollBy(0, 3614)
  };

  const windowScrollContact = () => {
    window.scrollBy(0, 4577)
  };

  return (
    <div>
    <ThemeProvider theme={theme}>
    <Box sx={{  position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', gap: -10 }}>
      <Box sx={{ position: 'absolute', marginLeft: 10 }}>
        <Box>
          {user &&
            <img src={user.picture} alt='Profile pic' style={{ width: 32, height: 32, borderRadius: '50%', position: 'absolute', top: '-27%', left: '-7%'}}/>
          }
        </Box>
        <Box sx={{ position: 'absolute', top: '-26.7%'}}>
          {user &&
            <Typography>{user.nickname}</Typography>
          }
        </Box>
        <Typography sx={{ fontSize: 100, marginBottom: 55, color: '#818181' }}>
          Håkon &nbsp;<span style={{ color: '#F4F4F4' }}>Sunde</span>
        </Typography>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', marginRight: 5, marginLeft: 32, alignItems: 'flex-start', marginTop: 10 }}>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }} onClick={windowScrollProject}>
            Projects
          </Button>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }} onClick={windowScrollBlog}>
            Blog
          </Button>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, marginLeft: -1, '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }} onClick={windowScrollMe}>
            Me
          </Button>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }} onClick={windowScrollContact}>
            Contact
          </Button>
          {!user &&
            <LoginButton />
          }
          {user &&
            <LogoutButton />
          }
      </List>
      <Box sx={{ backgroundColor: '#BABABA', width: '100%', height: '100vh' }}>
      </Box>
    </Box>
    <Box sx={{ textAlign: 'center', maxWidth: '100%' }}>
  <Typography variant='h2' sx={{ color: '#818181', marginTop: 4 }}>
    Projects
  </Typography> 
  <Typography variant='subtitle1' sx={{ color: '#818181', marginTop: 5 }}>
    Check out my work below!
  </Typography>
  <Grid container spacing={7} justifyContent="center" sx={{ marginTop: 3, marginBottom: 22 }}>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346, height: 400 }}>
        <CardContent>
          <Typography variant='h5' sx={{ marginTop: 4 }}>Hotel Website</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 6 }}>This was created as a project for my programming class at school. It is designed to make hotel reservations easy both for the customer and staff. It aims to provide information about the hotel, meanwhile also providing functionality which makes the hotel experience that much better!</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='https://github.com/sundehakon/Hotell-React' target='_blank' sx={{ marginTop: 5 }}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346, height: 400 }}>
        <CardContent>
          <Typography variant='h5' sx={{ marginTop: 4 }}>SundeAI</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 6 }}>A simple console based application which uses an API provided by Stability AI to generate images. This project was created with JavaScript and helped teach me about fetching data from APIs using JS and Node.</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='https://github.com/sundehakon/SundeAI' target='_blank' sx={{ marginTop: 10 }}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346, height: 400 }}>
        <CardContent>
          <Typography variant='h5' sx={{ marginTop: 4 }}>YouTube Downloader</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 6 }}>One of my first intermediate level C# projects. I wanted to make a script which actually felt useful, and had real purpose and functionality. I advise you however not to use this program with ill intentions because it I do not think YouTube likes programs such as this...</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='https://github.com/sundehakon/youtubedownload-csharp' target='_blank' sx={{ marginTop: 7 }}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346, height: 400 }}>
        <CardContent>
          <Typography variant='h5' sx={{ marginTop: 4 }}>Random Number Game</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 6 }}>A game created using C# which main purpose is having the user guess a computer generated number. This game provides functionality such as letting the user pick a difficulty, randomly generating numbers that users can guess, a score which checks your difference from the actual answer and ASCII art representing the game intro, game over and victory!</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', marginTop: 2 }}>
          <Button size='small' href='https://github.com/sundehakon/random-number-game' target='_blank'>Learn More</Button>
          <Button size='small' href='https://dotnetfiddle.net/ZtSWcW' target='_blank'>Try It Out</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346, height: 400 }}>
        <CardContent>
          <Typography variant='h5'>Portfolio</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 1 }}>The website you are currently on! A React based portfolio to showcase myself and the projects I have worked on so far in my career. It is mostly frontend, but I am thinking of adding blog functionalities which will allow me to add blog posts to the website and users like you the ability to comment on them.</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='https://github.com/sundehakon/random-number-game' target='_blank' sx={{ marginTop: 3 }}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346, height: 400 }}>
        <CardContent>
          <Typography variant='h5'>Placeholder</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 1 }}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='#' target='_blank' sx={{ marginTop: 3 }}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346, height: 400 }}>
        <CardContent>
          <Typography variant='h5'>Placeholder</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 1 }}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='#' target='_blank' sx={{ marginTop: 3 }}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card variant='outlined' sx={{ maxWidth: 346, height: 400 }}>
        <CardContent>
          <Typography variant='h5'>Placeholder</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: 1 }}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size='small' href='#' target='_blank' sx={{ marginTop: 3 }}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
</Box>
<Box sx={{ backgroundColor: '#dedede', width: '100vw', height: 963 }}>
  <Typography sx={{ textAlign: 'center', paddingTop: 4 }} variant='h4'>
    Blog
  </Typography>
  <Grid container spacing={3} sx={{ marginLeft: 3, marginTop: 7, width: '90%' }} direction='row'>
  {blogs.map((blog, index) => (
    <Grid item key={index}>
      <Paper sx={{ width: 400, cursor: 'pointer', overflow: 'hidden', padding: 4 }} onClick={() => handleOpen(blog)}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <Typography variant='h5' sx={{ marginTop: 2 }}>{blog.title}</Typography>
          <Typography sx={{ marginTop: 2, marginRight: 2 }}>{blog.date}</Typography>
        </Box>
        <Typography sx={{ marginBottom: 3 }}>{blog.content}</Typography>
      </Paper>
    </Grid>
  ))}
</Grid>
  <Modal open={selectedBlog !== null} onClose={handleClose}>
    <Box 
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        maxWidth: '90%',
        maxHeight: '90%',
        overflow: 'auto',
        outline: 'none',
      }}>
      <Typography variant='h4'>{selectedBlog?.title}</Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginTop: 2 }}>
        <Typography>written by {selectedBlog?.author}</Typography>
        <Typography>{selectedBlog?.date}</Typography>
      </Box>
      <Typography sx={{ marginBottom: 3, marginTop: 2 }}>{selectedBlog?.content}</Typography>
      <hr />
      <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Comments</Typography>
      {comments.map((comment, index) => {
        <Typography>{comment.content}</Typography>
      })}
    </Box>
  </Modal>
  {!user && (
      <div>
      <Typography sx={{ textAlign: 'center', marginTop: 45 }} variant='subtitle1'>
        Please Log In To View Blog Posts
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <LoginButton />
      </Box>
    </div>
  
  )}
</Box>
<Box sx={{ backgroundColor: 'white', width: '100%', height: 963, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
  <Box sx={{ color: '#818181' }}>
    <Typography sx={{ fontWeight: 'bold' }} variant='h4'>
      Hi, I'm Håkon Sunde
    </Typography>
    <Typography sx={{ marginTop: 2 }}>
      a 16 year old developer from Norway
    </Typography>
    <Typography sx={{ marginTop: 2 }}>
      Want to talk with me?: <Link href='mailto: hakon.su@gmail.com' underline='hover' color={'inherit'}>hakon.su@gmail.com</Link>
    </Typography>
    <a href='https://github.com/sundehakon' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/github.svg' alt='GitHub logo' style={{ height: 50, marginTop: 20 }}/></a>
    <a href='https://twitter.com/lordsunde' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/twitter.svg' alt='Twitter logo' style={{ height: 50, marginTop: 20, marginLeft: 20 }}/></a>
    <a href='https://www.facebook.com/hakon.sunde.313/' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/facebook.svg' alt='Facebook logo' style={{ height: 50, marginTop: 20, marginLeft: 20 }}/></a>
  </Box>
  <img src='/images/flight-reacts-removebg-preview.png' alt='Selfie of famous streamer Flight Reacts' style={{ width: '25%', height: 400 }}/>
</Box>
<Box sx={{ backgroundColor: '#dedede', width: '100%', height: 963 }}>
  <Typography sx={{ textAlign: 'center' }}>
    Contact
  </Typography>
</Box>
<Box sx={{ backgroundColor: 'white', width: '100%', height: 400 }}>
  <Typography sx={{ textAlign: 'center' }}>
    Footer
  </Typography>
</Box>
</ThemeProvider>
</div>
  );
}

export default App;

