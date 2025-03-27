import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import WorldleSolve from './WorldleSolve';

const Tools = () => {
    return (
        <Box>
            <Typography variant='h4' sx={{ textAlign: 'center', p: 4 }}>Tools</Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <WorldleSolve />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Tools;