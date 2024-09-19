import { Container, Typography } from "@mui/material"
import LoginButton from "./Login";

const Auth = () => {
    return (
        <Container>
            <Typography variant="h4">Authentication across my platforms</Typography>
            <LoginButton />
        </Container>
    );
};

export default Auth;