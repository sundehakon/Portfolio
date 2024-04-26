import { Box, Typography, List, ListItem } from '@mui/material';

function App() {
  return (
    <div>
    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', overflow: 'hidden' }}>
      <Typography sx={{ fontSize: 100, marginLeft: 12, marginBottom: 55 }}>
        Håkon
      </Typography>
      <List>
        <ListItem>Projects</ListItem>
        <ListItem>Blog</ListItem>
        <ListItem>Me</ListItem>
        <ListItem>Contact</ListItem>
      </List>
      <Typography
        sx={{
          fontSize: 100,
          position: 'absolute',
          color: 'white',
          top: '28%',
          left: '33%', 
          transform: 'translate(-50%, -50%)',
        }}
      >
        Sunde
      </Typography>
      <img
        src='/images/IMG_0903.jpeg'
        alt='Blossoming nature'
        style={{ width: 'auto', height: '100%', minWidth: '80%' }}
      />
    </Box>
    </div>
  );
}

export default App;

