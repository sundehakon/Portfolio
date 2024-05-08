import { Box, List, ListItemButton, Typography, useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: isSmallScreen ? 'center' : 'flex-start',
                padding: isSmallScreen ? '1rem 3rem 3rem' : '3rem',
                flexDirection: isSmallScreen ? 'column' : 'row',
                textAlign: isSmallScreen ? 'center' : 'left', 
            }}
        >
            <h1
                className='fira-sans-condensed-thin'
                style={{
                    color: '#fcfcfc',
                    fontSize: isSmallScreen ? '3rem' : '4.375rem', 
                    marginBottom: isSmallScreen ? '1rem' : '0', 
                    marginTop: isSmallScreen ? '0' : '0rem',
                }}
            >
                håkon sunde
            </h1>
            <List sx={{ display: 'flex', color: '#818181', flexDirection: isSmallScreen ? 'column' : 'row' }}>
                <ListItemButton sx={{ '&:hover': { color: '#fcfcfc' } }} disableRipple style={{ backgroundColor: 'transparent' }}>me</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: '#fcfcfc' } }} disableRipple style={{ backgroundColor: 'transparent' }}>projects</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: '#fcfcfc' } }} disableRipple style={{ backgroundColor: 'transparent' }}>user</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: '#fcfcfc' } }} disableRipple style={{ backgroundColor: 'transparent' }}>blog</ListItemButton>
                <ListItemButton sx={{ '&:hover': { color: '#fcfcfc' } }} disableRipple style={{ backgroundColor: 'transparent' }}>contact</ListItemButton>
            </List>
        </Box>
    );
};

export default Header;
