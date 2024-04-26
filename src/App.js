import { Box, Typography, List, ListItemButton, Button } from '@mui/material';

function App() {
  return (
    <div>
    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', overflow: 'hidden', gap: -10 }}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ marginLeft: 10 }}>
        <Typography sx={{ fontSize: 100, marginBottom: 55, color: '#818181', marginRight: -16 }}>
          Håkon
        </Typography>
        </Box>
      </Box>
      <List>
        <ListItemButton>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, '&:hover': { color: 'black' } }}>
            Projects
          </Button>
        </ListItemButton>
        <ListItemButton>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17 }}>
            Blog
          </Button>
        </ListItemButton>
        <ListItemButton>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17, marginLeft: -1 }}>
            Me
          </Button>
        </ListItemButton>
        <ListItemButton>
          <Button sx={{ color: '#818181', fontWeight: 'bolder', fontSize: 17 }}>
            Contact
          </Button>
        </ListItemButton>
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
    </div>
  );
}

export default App;

