import { Typography, Container, Box, Button } from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning';
import HomeIcon from '@mui/icons-material/Home';

const NotFound = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 15, gap: 2 }}>
                <WarningIcon sx={{ width: 100, height: 100}}/>
                <Typography variant="h5">404 NOT FOUND</Typography>
                <Typography>Seems like you're lost?</Typography>
                <Button variant='contained' endIcon={<HomeIcon />} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.76)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.64)' }, borderRadius: 20 }} disableRipple href='/'>
                    Go Back Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;