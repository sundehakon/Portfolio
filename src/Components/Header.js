import * as React from 'react';
import { Box, CssBaseline, Modal, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Paper, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; 
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const getNavItems = (t) => [
  { name: t('home'), link: '/' },
  { name: t('projects'), link: '/projects' },
  { name: t('contactheader'), link: '/contact' },
  { name: 'Blog', link: '/blog' },
  { name: 'Auth', link: '/auth' },
  { name: 'API', link: 'https://api.sundehakon.tech', external: true },
  { name: 'Policy', link: '/policy' },
  { component: <LanguageSwitcher /> }, 
];

function Header() {
  const { t } = useTranslation(); 
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = getNavItems(t); 

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.link ? (
              <ListItemButton component={Link} to={item.link}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            ) : (
              <Box sx={{ padding: 2 }}>{item.component}</Box>
            )}
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
          sx={{ flexGrow: 1, display: { sm: 'block' }, color: 'rgba(0, 0, 0, 0.76)', textDecoration: 'none' }}
        >
          sundehakon
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          {navItems.map((item, index) => (
            item.link ? (
              <Typography
                key={index}
                sx={{
                  color: 'rgba(0, 0, 0, 0.76)',
                  textDecoration: 'none',
                  marginLeft: 3,
                  padding: '10px 0',
                  borderBottom: '2px solid transparent', 
                  '&:hover': {
                    borderBottom: '2px solid rgba(0, 0, 0, 0.76)', 
                  },
                }}
                component={Link}
                to={item.link}
              >
                {item.name}
              </Typography>
            ) : (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginLeft: 3 }}>
                {item.component}
              </Box>
            )
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