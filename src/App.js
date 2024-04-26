import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', gap: 60 }}>
      <Typography>Håkon Sunde</Typography>
      <img src='/images/IMG_0903.jpeg' alt='Blossoming nature' style={{ width: '150vw', height: '100vh' }}/>
    </Box>
  );
}

export default App;