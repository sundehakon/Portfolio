import { Box, Typography } from '@mui/material';
import WorldleSolve from './WorldleSolve';

const Tools = () => {
    return (
        <Box>
            <Typography variant='h4' sx={{ textAlign: 'center', p: 4 }}>Tools</Typography>
            <WorldleSolve />
        </Box>
    );
};

export default Tools;