import { Container, Typography } from "@mui/material";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { useTranslation } from 'react-i18next';

const Auth = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Typography variant="h4">{t('authtitle')}</Typography>
            <LoginButton />
            <LogoutButton />
        </Container>
    );
};

export default Auth;