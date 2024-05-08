import { Box, List, ListItemButton } from '@mui/material';

const Header = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: 3 }}>
            <List sx={{ display: 'flex', color: '#818181' }}>
                <ListItemButton sx={{ '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>Me</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>Projects</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>User</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>Blog</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }}>Contact</ListItemButton>
            </List>
        </Box>
    );
};

export default Header;