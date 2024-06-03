import { Typography, Container, Box, Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Home = () => {
    return (
        <div>
        <Box sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(133deg, rgba(21,21,21,0) 11%, rgba(21,21,21,0.2889749649859944) 29%, rgba(21,21,21,0.2889749649859944) 36%, rgba(21,21,21,0) 51%)', 
            zIndex: 1 
        }} />
        <Container sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ 
                position: 'relative', 
                zIndex: 2, 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginTop: 10,
                flexDirection: { xs: 'column', sm: 'row' }, 
                textAlign: { xs: 'center', sm: 'left' },
                padding: 3
            }}>
                <Box sx={{ 
                    position: 'relative', 
                    zIndex: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 2, 
                    textAlign: 'center' 
                }}>
                    <Typography variant='h2' sx={{ marginBottom: { xs: 2, sm: 0 }, fontWeight: 'bolder' }}>Håkon Sunde</Typography>
                    <Typography>16 year old student developer from Oslo, Norway.</Typography>
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Button variant='contained' endIcon={<NavigateNextIcon />} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.87)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.73)' } }} disableRipple href='mailto:hakon.su@gmail.com'>
                            Contact Me
                        </Button>
                        <Button endIcon={<NavigateNextIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} disableRipple style={{ backgroundColor: 'transparent' }}>
                            Github
                        </Button>
                    </Box>
                </Box> 
                <Box sx={{ 
                    borderRadius: '50%', 
                    overflow: 'hidden', 
                    height: 400, 
                    width: 400,
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginTop: { xs: 2, sm: 0 },
                    background: 'linear-gradient(133deg, rgba(28,28,31,1) 17%, rgba(182,182,183,1) 92%)'
                }}>
                    <img 
                        src='/me.png' 
                        alt='Memoji' 
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
        </div>
    );
};

export default Home;
