import { Box, Typography, List, Button, ThemeProvider, Grid, Card, CardContent, CardActions, Link, Paper, Modal, TextField, IconButton, Snackbar, ListItemButton } from '@mui/material';
import theme from './theme';
import './App.css';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import Header from './Components/Header';

function App() {
  const { user } = useAuth0();
  const [blogs, setBlog] = useState([]);
  const [comments, setComment] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [commentContent, setCommentContent] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => { 
      try {
          const response = await axios.get('https://portfolioapi-hysa.onrender.com/api/Blogs');
          setBlog(response.data);
      } catch (error) {
          console.error('Error fetching orders', error);
      }
    };

    const fetchComment = async () => {
      try {
        if (user) {
          const response = await axios.get('https://portfolioapi-hysa.onrender.com/api/Comments');
          setComment(response.data);
        }
      } catch (error) {
        console.error('Error fetching comments', error);
      }
    };

    fetchBlog();
    fetchComment();
  }, [user, setBlog, setComment]);

  const handleSubmitComment = async () => {
    try {
      const userComments = comments.filter(comment => comment.userId === user?.sub);
      const maxCommentsPerUser = 10; 
      if (userComments.length >= maxCommentsPerUser) {
        console.log('You have reached the maximum comment limit.');
        setOpen(true);
        return;
      }
      const response = await axios.post('https://portfolioapi-hysa.onrender.com/api/Comments', {
        postId: selectedBlog?._id,
        userId: user?.sub,
        userPicture: user?.picture,
        userName: user?.nickname,
        content: commentContent,
        date: new Date().toISOString(),
    });

    setComment([...comments, response.data]);
    setCommentContent('');
  } catch (error) {
    console.error('Error submitting comment:', error);
  }};

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  const confirmDelete = (
    <React.Fragment>
        <IconButton
            size='small'
            aria-label='close'
            color='inherit'
            onClick={handleSnackbarClose}
        >
            <CloseIcon fontSize='small' />
        </IconButton>
    </React.Fragment>
)

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
  };

  const handleClose = () => {
    setSelectedBlog(null);
  };

  return (
<div>
<ThemeProvider theme={theme}>
    <Header />

<Box sx={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
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

<Box sx={{ backgroundColor: '#dedede', width: '100vw', height: 963 }}>
  <Typography sx={{ textAlign: 'center', paddingTop: 4 }} variant='h4'>
    Blog
  </Typography>
  <Grid container spacing={3} sx={{ marginLeft: 10, marginTop: 10, width: '90%' }} direction='row'>
  {blogs.map((blog, index) => (
  <Grid item key={index}>
    <Paper sx={{ width: 400, height: 510, cursor: 'pointer', overflow: 'hidden', padding: 4 }} onClick={() => handleOpen(blog)}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <Typography variant='h5' sx={{ marginTop: 2 }}>{blog.title}</Typography>
        <Typography sx={{ marginTop: 2, marginRight: 2 }}>{blog.date}</Typography>
      </Box>
      <Typography sx={{ marginBottom: 3, overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-block', maxHeight: '25.4em', lineHeight: '1.8em' }}>{blog.content}</Typography>
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
      {user && selectedBlog?._id && (
        <>
        {comments
          .filter((comment) => comment.postId === selectedBlog._id)
          .map((comment, index) => (
            <Box key={index} sx={{ marginTop: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <img src={comment.userPicture} alt='Profile pic' style={{ width: 37, height: 37, borderRadius: '50%' }}/>
              <Box>
              <Typography sx={{ fontWeight: 'bold' }}>{comment.userName}</Typography>
              <Typography>{comment.content}</Typography>
              </Box>
            </Box>
          ))}
        {selectedBlog?._id && comments.filter((comment) => comment.postId === selectedBlog._id).length === 0 && (
          <Typography sx={{ marginTop: 2 }}>No comments</Typography>
        )}  
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField 
            variant='outlined' 
            label='Write comment' 
            sx={{ marginTop: 3, width: 730 }}
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <IconButton onClick={handleSubmitComment} sx={{ marginTop: 3 }}>
            <SendIcon />
          </IconButton>
        </Box>
        </>
      )}
      {!user && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography>Login to view comments</Typography>
          <LoginButton />
        </Box>
      )}
      </Box>
  </Modal>
</Box>
<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleSnackbarClose}
  message='You have reached the maximum comment limit'
  action={confirmDelete}
/>
</ThemeProvider>
</div>
  );
}

export default App;

