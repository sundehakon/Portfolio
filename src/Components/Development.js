import { Typography, Container, Button, CircularProgress, Box } from '@mui/material';
import { useState } from 'react';
import CareerList from './CareerList';

const Development = () => {
    const [state, setState] = useState(true);

    const handleDeactivate = () => {
        setState(false);
    };

    const handleActivate = () => {
        setState(true);
    };

    return (
        <Container>
            <Typography>Development Area</Typography>
            {state === true && 
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <CircularProgress />
                    <Button onClick={handleDeactivate}>Deactivate</Button>  
                </Box>
            }
            {state === false &&        
                <Button onClick={handleActivate}>Activate</Button>
            }
            <CareerList />
        </Container>
    );
};

export default Development;