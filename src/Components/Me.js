import { Box, Typography, Link } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const Me = () => {
    const { user } = useAuth0();

    return (
        <Box sx={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center' }}>
        <Box sx={{ padding: 10, backgroundColor: '#fcfcfc', width: '100%' }}>
            <Typography sx={{ fontWeight: 'bold' }} variant='h4'>
            hi, there {user.nickname}!
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
            my name is håkon sunde and i am
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
            a 16 year old developer from Norway
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
            want to talk with me?: <Link href='mailto: hakon.su@gmail.com' color={'inherit'}>hakon.su@gmail.com</Link>
            </Typography>
            <a href='https://github.com/sundehakon' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/github.svg' alt='GitHub logo' style={{ height: 50, marginTop: 20 }}/></a>
            <a href='https://twitter.com/lordsunde' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/twitter.svg' alt='Twitter logo' style={{ height: 50, marginTop: 20, marginLeft: 20 }}/></a>
            <a href='https://www.facebook.com/hakon.sunde.313/' target='_blank' rel='noreferrer'><img src='https://raw.githubusercontent.com/jmnote/z-icons/master/svg/facebook.svg' alt='Facebook logo' style={{ height: 50, marginTop: 20, marginLeft: 20 }}/></a>
        </Box>
        </Box>
    );
};

export default Me;