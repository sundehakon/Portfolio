import { Typography, Container, Box } from "@mui/material"

const Home = () => {
    return (
        <Container>
            <Typography>Håkon Sunde</Typography>
            <Box sx={{ border: '1px solid grey', borderRadius: '100%', width: 450 }}>
                <img src='/me.png' alt='Me' style={{ height: 400, width: 400 }}/>
            </Box>
        </Container>
    );
};

export default Home;