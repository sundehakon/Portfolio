import * as React from 'react';
import { Box, CssBaseline, Modal, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Paper, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; 

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' }
];

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <Container maxWidth="lg">
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
              <Typography
                key={item.name}
                sx={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none' }}
                component={Link}
                to={item.link}
              >
                {item.name}
              </Typography>
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
      </Container>
      <nav>
        <Modal
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
