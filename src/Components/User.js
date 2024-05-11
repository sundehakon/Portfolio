import { Typography, Box, Grid, Paper } from "@mui/material";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../login";
import LogoutButton from "../logout";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const User = ({ id }) => {
    const { user } = useAuth0();

    return (
        <div id={id}>
            <Box sx={{ height: 50, backgroundColor: 'white' }}></Box>
            <Box sx={{ textAlign: 'center', backgroundColor: 'white' }}>
                <Typography variant='h4'>
                    auth0
                </Typography>
                <Typography sx={{ marginTop: 2 }} variant='subtitle1'>
                    sign up with an account
                </Typography>
                <Typography sx={{ marginTop: 2 }} variant='subtitle1'>
                    which will work across most of my platforms
                </Typography>
                <Box sx={{ marginTop: 5 }}>
                    {!user &&
                        <LoginButton />
                    }
                    {user &&
                        <LogoutButton />
                    }
                </Box>
                {user &&
                    <Grid container spacing={3} justifyContent={'center'}>
                        <Grid item>
                            <Paper sx={{ padding: 6, marginTop: 4, marginBottom: 4, borderRadius: 5, boxShadow: 3 }}>
                                <Typography variant='h5'>
                                    your profile
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography><img src={user.picture} alt='User profile' style={{ borderRadius: '50%', height: 64, width: 64, marginTop: 20 }}/></Typography>
                                    <Typography><span style={{ fontWeight: 'bolder' }}>username.</span>&nbsp; {user.name}</Typography>
                                    <Typography><span style={{ fontWeight: 'bolder' }}>email.</span>&nbsp; {user.email}</Typography>
                                    <Typography><span style={{ fontWeight: 'bolder' }}>nickname.</span>&nbsp; {user.nickname}</Typography>
                                    {user.email_verified &&
                                        <Typography><span style={{ fontWeight: 'bolder' }}>email verified?.</span>&nbsp; ok</Typography>
                                    }
                                    {!user.email_verified &&
                                        <Typography><span style={{ fontWeight: 'bolder' }}>email verified?.</span>&nbsp; no</Typography>
                                    }
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                }
                <Typography sx={{ marginTop: 6 }}>use your account to write comments</Typography>
                <ArrowDownwardIcon sx={{ marginTop: 3, marginBottom: 4 }}/>
            </Box>
        </div>
    );
};

export default User;