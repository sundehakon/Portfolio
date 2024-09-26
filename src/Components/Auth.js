import { Container, Typography, Box, Paper, Divider, Avatar } from "@mui/material";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';

const Auth = () => {
    const { t } = useTranslation();
    const { isAuthenticated, user } = useAuth0();

    const updatedAt = user?.updated_at;
    const updateDate = new Date(updatedAt);

    const formattedDate = updateDate.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    
    const formattedTime = updateDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    return (
        <Container>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(167deg, rgba(21,21,21,0) 0%, rgba(91,162,240,0.2889749649859944) 22%, rgba(91,162,240,0.3702074579831933) 41%, rgba(21,21,21,0) 56%)',
                zIndex: -1
            }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 7 }}>
                <Typography variant='h4' sx={{ textAlign: 'center', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                    {t('authtitle')}
                </Typography>
                <Typography sx={{ textAlign: 'center', width: { md: 500, sm: 400, xs: 300 }, marginTop: 2 }}>
                    {t('authdescription')}
                </Typography>
                
                {!isAuthenticated &&
                    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                        <LoginButton />
                    </Box>
                }

                {isAuthenticated &&
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative', mt: 2, marginBottom: 10 }}>
                        <LogoutButton />
                        <Paper sx={{ 
                            width: { xs: 250, sm: 300, md: 350 }, 
                            height: { xs: 350, sm: 400, md: 450 }, 
                            textAlign: 'center', 
                            borderRadius: 3, 
                            overflow: 'hidden', 
                            marginTop: { xs: 5, sm: 5, md: 8 },
                            position: 'relative'  
                        }} elevation={2}>
    
                            <Box sx={{ 
                                background: 'linear-gradient(133deg, rgba(49,92,138,1) 17%, rgba(91,162,240,1) 92%)', 
                                height: '35%',  
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                            }}>
                            </Box>
                            <Divider />
                            <Box sx={{ 
                                height: '60%', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: 2,
                            }}>
                                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
                                    {user.email}
                                </Typography>
                                {user.email_verified ? (
                                    <Typography sx={{ ml: 1, color: 'green' }}>Verified</Typography>
                                ) : (
                                    <Typography sx={{ ml: 1, color: 'red' }}>Not Verified</Typography>
                                )}
                                <Box>
                                    <Typography sx={{ fontWeight: 'bold' }}>Last update:</Typography>
                                    <Typography>{formattedDate} at {formattedTime}</Typography>
                                </Box>
                            </Box>

                        </Paper>
                        <Avatar
                            src={user.picture} 
                            alt={user.name}
                            sx={{
                                width: { xs: 80, sm: 100, md: 120 }, 
                                height: { xs: 80, sm: 100, md: 120 }, 
                                position: 'absolute',
                                top: '45%',  
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                border: '4px solid white',
                                zIndex: 1,
                            }}
                        />
                    </Box>
                }
            </Box>
        </Container>
    );
};

export default Auth;