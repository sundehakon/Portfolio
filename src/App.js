import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', gap: 100 }}>
      <Typography>Håkon Sunde</Typography>
      <img src='/images/IMG_0904.jpeg' alt='Blossoming nature' style={{ width: 400, height: 300 }}/>
    </Box>
  );
}

export default App;