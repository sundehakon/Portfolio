import { Typography, Container, Box, Button, Grid } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const skills = [
    { name: 'JavaScript', icon: '/skill-icons/js.png' },
    { name: 'React', icon: '/skill-icons/react.png' },
    { name: 'Node.js', icon: '/skill-icons/nodejs.png' },
    { name: 'C#', icon: '/skill-icons/csharp.png' },
    { name: 'Python', icon: '/skill-icons/python.png' },
    { name: 'HTML', icon: '/skill-icons/html.png' },
    { name: 'CSS', icon: '/skill-icons/css.png' },
    { name: 'Git', icon: '/skill-icons/git.png' },
    { name: 'MongoDB', icon: '/skill-icons/mongodb.png' },
];

const Home = () => {
    return (
        <div>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(167deg, rgba(21,21,21,0) 0%, rgba(21,21,21,0.2889749649859944) 22%, rgba(21,21,21,0.21054359243697474) 41%, rgba(21,21,21,0) 56%)',
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
                        {/* Change gradient color because its ugly rn */}
                        <Typography variant='h2' sx={{
                            marginBottom: { xs: 2, sm: 0 },
                            fontWeight: 'bolder',
                            background: 'linear-gradient(133deg, rgba(28,28,31,1) 17%, rgba(182,182,183,1) 92%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Håkon Sunde
                        </Typography>
                        <Typography>16 year old student developer from Oslo, Norway</Typography>
                        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center' }}>
                            <Button variant='contained' endIcon={<NavigateNextIcon />} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.76)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.64)' }, borderRadius: 20 }} disableRipple href='mailto:hakon.su@gmail.com'>
                                Contact Me
                            </Button>
                            <Button endIcon={<NavigateNextIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} disableRipple style={{ backgroundColor: 'transparent' }} href='https://github.com/sundehakon' target='_blank'>
                                Github
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        borderRadius: '50%',
                        overflow: 'hidden',
                        height: 400,
                        width: 400,
                        minWidth: 400,
                        maxWidth: 400,
                        display: { xs: 'none', sm: 'flex' },
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

                <Box sx={{ textAlign: 'center', marginTop: 20 }}>
                    <Typography variant='h4'>Skillset</Typography>
                    <Grid
                        container
                        spacing={5}
                        justifyContent='center'
                        alignItems='center'
                        sx={{ marginTop: 3 }}
                    >
                        {skills.map((item, index) => ( 
                            <Grid item key={index}> 
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        '& img': { 
                                            transition: 'transform 0.3s ease-in-out',
                                        },
                                        '& img:hover': { 
                                            transform: 'translateY(-10px)', 
                                        },
                                    }}
                                >
                                    <img src={item.icon} alt={item.name} style={{ height: 82, width: 82 }} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Home;
