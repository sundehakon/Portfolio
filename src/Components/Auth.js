import { Container, Typography, Box, Paper } from "@mui/material";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';

const Auth = () => {
    const { t } = useTranslation();
    const { isAuthenticated } = useAuth0();

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 10 }}>
                <Typography variant='h4' sx={{ textAlign: 'center' }}>{t('authtitle')}</Typography>
                {!isAuthenticated &&
                    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                        <LoginButton />
                        <Typography>Login to view profile card</Typography>
                    </Box>
                }
                {isAuthenticated &&
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <LogoutButton />
                        <Paper sx={{ width: 300, height: 400, textAlign: 'center' }} elevation={2}>
                            <Typography>Profile Card</Typography>
                        </Paper>
                    </Box>
                }
            </Box>
        </Container>
    );
};

export default Auth;