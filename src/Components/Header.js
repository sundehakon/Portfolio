import * as React from 'react';
import { Box, CssBaseline, Modal, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'About', 'Contact'];

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' }, padding: 2 }}
          >
            Håkon Sunde
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto', display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      <nav>
        <Modal
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
        >
            <Paper sx={{ margin: 1 }}>
                <Typography
                    variant="h6"
                    sx={{ padding: 2 }}
                >
                    Håkon Sunde
                </Typography>
                {drawer}
            </Paper>
        </Modal>
      </nav>
    </Box>
  );
}

export default Header;
