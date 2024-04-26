import { Box, Typography, List, ListItemButton, Button, ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', overflow: 'hidden', gap: -10 }}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ marginLeft: 10 }}>
        <Typography sx={{ fontSize: 100, marginBottom: 55, color: '#818181', marginRight: -13 }}>
          Håkon
        </Typography>
        </Box>
      </Box>
      <List sx={{ marginRight: 2 }}>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>
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
          left: '29%', 
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
    </ThemeProvider>
    </div>
  );
}

export default App;

