import { Box, List, ListItemButton, useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: isSmallScreen ? 'center' : 'flex-start',
                padding: isSmallScreen ? '1rem 3rem 3rem' : '3rem',
                flexDirection: isSmallScreen ? 'column' : 'row',
                textAlign: isSmallScreen ? 'center' : 'left', 
            }}
        >
            <List sx={{ display: 'flex', color: '#818181', flexDirection: isSmallScreen ? 'column' : 'row' }}>
                <ListItemButton sx={{ '&:hover': { color: '#151515' } }} disableRipple style={{ backgroundColor: 'transparent' }}>me</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: '#151515' } }} disableRipple style={{ backgroundColor: 'transparent' }}>projects</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: '#151515' } }} disableRipple style={{ backgroundColor: 'transparent' }}>auth0</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: '#151515' } }} disableRipple style={{ backgroundColor: 'transparent' }}>blog</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: '#151515' } }} disableRipple style={{ backgroundColor: 'transparent' }}>contact</ListItemButton>
            </List>
        </Box>
    );
};

export default Header;
