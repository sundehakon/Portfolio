import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const { t } = useTranslation();

    return <Button onClick={() => loginWithRedirect()} sx={{ fontWeight: 'bolder', fontSize: 17, '&:hover': { color: 'black' } }} disableRipple style={{ backgroundColor: 'transparent' }} color='success'>{t('login')}</Button>
}

export default LoginButton;