import { Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';

const Main = () => {
    return (
        <Box sx={{ paddingTop: 36, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>
                <Typography variant='h3'>Hi, I'm Håkon Sunde</Typography>
                <Typography variant='h5'>
                    <Typewriter 
                        options={{
                        strings: ['Software Developer', 'Full Stack'],
                        autoStart: true,
                        loop: true
                        }}
                    />
                </Typography>
            </Box>
            <img src="me.png" alt="Portrait" style={{ borderRadius: '50%', width: 364, height: 364 }}/>
        </Box>
    );
};

export default Main;