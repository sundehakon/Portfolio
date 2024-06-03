import { Typography, Container, Box } from "@mui/material";

const Home = () => {
    return (
        <Container>
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginTop: 10,
                flexDirection: { xs: 'column', sm: 'row' }, 
                textAlign: { xs: 'center', sm: 'left' } 
            }}>
                <Typography variant='h2' sx={{ marginBottom: { xs: 2, sm: 0 } }}>Håkon Sunde</Typography>
                <Box sx={{ 
                    borderRadius: '50%', 
                    overflow: 'hidden', 
                    height: 400, 
                    width: 400,
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginTop: { xs: 2, sm: 0 },
                    background: 'linear-gradient(to bottom, #3f51b5, #2196f3)'
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

