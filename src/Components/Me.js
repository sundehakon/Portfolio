import { Box, Typography, Link } from '@mui/material'

const Me = () => {
    return (
        <Box sx={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 10, paddingBottom: 34, textAlign: 'center' }}>
        <Box sx={{ color: '#fcfcfc' }}>
            <Typography sx={{ fontWeight: 'bold' }} variant='h4'>
            Hi, there!
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
            I'm a 16 year old developer from Norway
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
            Want to talk with me?: <Link href='mailto: hakon.su@gmail.com' underline='hover' color={'inherit'}>hakon.su@gmail.com</Link>
            </Typography>
            <a href='https://github.com/sundehakon' target='_blank' rel='noreferrer'><img src='/images/github-white.png' alt='GitHub logo' style={{ height: 50, marginTop: 20 }}/></a>
            <a href='https://twitter.com/lordsunde' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/twitter.svg' alt='Twitter logo' style={{ height: 50, marginTop: 20, marginLeft: 20 }}/></a>
            <a href='https://www.facebook.com/hakon.sunde.313/' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/facebook.svg' alt='Facebook logo' style={{ height: 50, marginTop: 20, marginLeft: 20 }}/></a>
        </Box>
        </Box>
    );
};

export default Me;