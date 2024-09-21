import { Container, Typography } from "@mui/material";
import LoginButton from "./Login";
import { useTranslation } from 'react-i18next';

const Auth = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Typography variant="h4">{t('authtitle')}</Typography>
            <LoginButton />
        </Container>
    );
};

export default Auth;