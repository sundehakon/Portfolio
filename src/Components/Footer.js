import { Box, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box 
            sx={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                backgroundColor: 'white',
                position: 'relative',  
            }}
        >
            <CssBaseline />
            <Toolbar>
                <Typography
                    sx={{ flexGrow: 1, display: { sm: 'flex' }, color: 'rgba(0, 0, 0, 0.76)' }}
                >
                    © Håkon Sunde 2024
                </Typography>
                <Box sx={{ display: { sm: 'flex' } }}>
                    <IconButton href='https://x.com/lordsunde' target='_blank' disableRipple sx={{ backgroundColor: 'transparent' }}>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton href='https://www.instagram.com/sunde.hakon/' target='_blank' disableRipple sx={{ backgroundColor: 'transparent' }}>
                        <InstagramIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </Box>
    );
};

export default Footer;