import { Typography, Box, Link, Grid } from '@mui/material';

const Contact = ({ id }) => {
    return (
        <div id={id}>
            <Box sx={{ height: 70, backgroundColor: 'white' }}></Box>
            <Box sx={{ backgroundColor: 'white' }}>
            <Grid>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Grid item>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center' }}>
                        <Typography variant='h5' sx={{ marginBottom: 2 }}>contact info</Typography>
                        <Typography><span style={{ fontWeight: 'bolder' }}>phone.</span> +47 960 42 872</Typography>
                        <Typography>
                            <span style={{ fontWeight: 'bolder' }}>email.</span>&nbsp;<Link href='mailto: hakon.su@gmail.com' color={'inherit'}>hakon.su@gmail.com</Link>
                        </Typography>
                        <Typography><span style={{ fontWeight: 'bolder' }}>instagram.</span> sunde.hakon</Typography>
                    </Box>
                </Grid>
                </Box>
            </Grid>
            <Box sx={{ textAlign: 'center', marginTop: 5 }}>
                <Typography variant='caption'>Copyright Håkon Sunde 2024 ©</Typography>
            </Box>
            <Box sx={{ backgroundColor: 'white', height: 10 }}></Box>
        </Box>
        </div>
    );
};

export default Contact;