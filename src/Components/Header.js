import * as React from 'react';
import { Box, CssBaseline, Modal, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Paper, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; 
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'Contact', link: '/contact' },
  { name: 'Auth', link: '/auth' }
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
    <Box sx={{ display: 'flex', flexDirection: 'column', zIndex: 3, position: 'relative' }}>
      <CssBaseline />
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to={'/'}
            sx={{ flexGrow: 1, display: { sm: 'block' }, color: 'rgba(0, 0, 0, 0.76)', textDecoration: 'none', '&:hover': { fontWeight: 'bolder' } }}
          >
            sundehakon
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <LanguageSwitcher />
            {navItems.map((item) => (
              <Typography
                key={item.name}
                sx={{ color: 'rgba(0, 0, 0, 0.76)', textDecoration: 'none', marginLeft: 3, '&:hover': { fontWeight: 'bolder' } }}
                component={Link}
                to={item.link}
              >
                {item.name}
              </Typography>
            ))}
          </Box>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
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
          <Paper sx={{ margin: 1, display: { sm: 'none' } }}>
            <Typography
              variant="h6"
              sx={{ padding: 2 }}
            >
              sundehakon
            </Typography>
            <Divider />
            {drawer}
          </Paper>
        </Modal>
      </nav>
    </Box>
  );
}

export default Header;
