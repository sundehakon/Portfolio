import Map from './Map';
import { Typography, Box, Link, Paper } from '@mui/material';

const Contact = ({ id }) => {
    return (
        <div id={id}>
            <Box sx={{ height: 70 }}></Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Paper sx={{ padding: 7, borderRadius: 7, boxShadow: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography variant='h5' sx={{ marginBottom: 2 }}>contact info</Typography>
                        <Typography><span style={{ fontWeight: 'bolder' }}>phone.</span> +47 960 42 872</Typography>
                        <Typography>
                            <span style={{ fontWeight: 'bolder' }}>email.</span>&nbsp;<Link href='mailto: hakon.su@gmail.com' color={'inherit'}>hakon.su@gmail.com</Link>
                        </Typography>
                        <Typography><span style={{ fontWeight: 'bolder' }}>instagram.</span> sunde.hakon</Typography>
                    </Box>
                    </Paper>
                    <Map />
                </Box>
            <Box sx={{ textAlign: 'center', marginTop: 5, marginBottom: 2 }}>
                <Typography variant='caption'>Copyright Håkon Sunde 2024 ©</Typography>
            </Box>
        </div>
    );
};

export default Contact;