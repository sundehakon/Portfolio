import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function LogoutButton() {
    const { logout } = useAuth0();
    const { t } = useTranslation();

    return <Button onClick={() => logout({ returnTo: window.location.origin })} sx={{ fontWeight: 'bolder', fontSize: 17, '&:hover':{ color: 'black' }}} disableRipple style={{ backgroundColor: 'transparent' }} color='error'>{t('logout')}</Button>
}

export default LogoutButton;