import { Typography, Box, Grid, Paper, List, ListItem } from "@mui/material";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../login";
import LogoutButton from "../logout";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const User = () => {
    const { user } = useAuth0();

    return (
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <Typography variant='h4'>
                user
            </Typography>
            <Typography sx={{ marginTop: 2 }} variant='subtitle1'>
                create your free user in my system
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
                        <Paper sx={{ padding: 6, marginTop: 4, marginBottom: 4, borderRadius: 5 }}>
                            <Typography variant='h5'>
                                you
                            </Typography>
                            <List>
                                <ListItem><span style={{ fontWeight: 'bolder' }}>username.</span>&nbsp; {user.name}</ListItem>
                                <ListItem><span style={{ fontWeight: 'bolder' }}>email.</span>&nbsp; {user.email}</ListItem>
                                <ListItem><span style={{ fontWeight: 'bolder' }}>nickname.</span>&nbsp; {user.nickname}</ListItem>
                                {user.email_verified &&
                                    <ListItem><span style={{ fontWeight: 'bolder' }}>email verified?.</span>&nbsp; ok</ListItem>
                                }
                                {!user.email_verified &&
                                    <ListItem><span style={{ fontWeight: 'bolder' }}>email verified?.</span>&nbsp; no</ListItem>
                                }
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            }
            <Typography sx={{ marginTop: 6 }}>use your account to write comments on blog posts</Typography>
            <ArrowDownwardIcon sx={{ marginTop: 3 }}/>
        </Box>
    );
};

export default User;