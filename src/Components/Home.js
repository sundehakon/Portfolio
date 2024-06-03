import { Typography, Container, Box } from "@mui/material";

const Home = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography>Håkon Sunde</Typography>
                <Box sx={{ 
                    border: 1, 
                    borderRadius: '50%', 
                    overflow: 'hidden', 
                    height: 400, 
                    width: 400,
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}>
                    <img 
                        src='/me.png' 
                        alt='Me' 
                        style={{ 
                            height: '100%', 
                            width: '100%', 
                            objectFit: 'cover', 
                            objectPosition: 'top' 
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
