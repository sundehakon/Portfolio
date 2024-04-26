import { Box, Typography, List, ListItem, rgbToHex } from '@mui/material';

function App() {
  return (
    <div>
    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', overflow: 'hidden', gap: -10 }}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ marginLeft: 10 }}>
        <Typography sx={{ fontSize: 100, marginBottom: 55, color: '#818181' }}>
          Håkon
        </Typography>
        </Box>
      </Box>
      <List sx={{ fontSize: 25, color: '#818181'}}>
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
          left: '35%', 
          transform: 'translate(-50%, -50%)',
        }}
      >
        Sunde
      </Typography>
      <img
        src='/images/IMG_0903.jpeg'
        alt='Blossoming nature'
        style={{ width: 'auto', height: '100%', minWidth: '83%' }}
      />
    </Box>
    </div>
  );
}

export default App;

