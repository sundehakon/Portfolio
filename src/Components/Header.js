import { Box, List, ListItemButton } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../login';
import LogoutButton from '../logout';

const Header = () => {
    const { user } = useAuth0();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: 3 }}>
        <List sx={{ display: 'flex', color: '#818181' }}>
            <ListItemButton sx={{ '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>Projects</ListItemButton>
            <ListItemButton sx={{ '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>Blog</ListItemButton>
            <ListItemButton sx={{ '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>Contact</ListItemButton>
            <ListItemButton sx={{ '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>Me</ListItemButton>
        </List>
        {!user && <LoginButton />}
        {user && <LogoutButton />}
        </Box>
    );
};

export default Header;