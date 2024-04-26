import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', overflow: 'hidden', gap: 3 }}>
      <Typography sx={{ fontSize: 100, marginLeft: 12, marginBottom: 55 }}>
        Håkon
      </Typography>
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
        style={{ width: 'auto', height: '100%', minWidth: '80%' }}
      />
    </Box>
  );
}

export default App;
