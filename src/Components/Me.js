import { Box, Typography, Link } from '@mui/material'

const Me = () => {
    return (
        <Box sx={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 10, paddingBottom: 34 }}>
        <Box sx={{ color: '#818181' }}>
            <Typography sx={{ fontWeight: 'bold' }} variant='h4'>
            Hi, I'm Håkon Sunde
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
            a 16 year old developer from Norway
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
            Want to talk with me?: <Link href='mailto: hakon.su@gmail.com' underline='hover' color={'inherit'}>hakon.su@gmail.com</Link>
            </Typography>
            <a href='https://github.com/sundehakon' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/github.svg' alt='GitHub logo' style={{ height: 50, marginTop: 20 }}/></a>
            <a href='https://twitter.com/lordsunde' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/twitter.svg' alt='Twitter logo' style={{ height: 50, marginTop: 20, marginLeft: 20 }}/></a>
            <a href='https://www.facebook.com/hakon.sunde.313/' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/facebook.svg' alt='Facebook logo' style={{ height: 50, marginTop: 20, marginLeft: 20 }}/></a>
        </Box>
        <img src='/images/flight-reacts-removebg-preview.png' alt='Selfie of famous streamer Flight Reacts' style={{ maxWidth: '25%', height: 'auto', minHeight: 300 }}/>
        </Box>
    );
};

export default Me;