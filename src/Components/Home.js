import { Typography, Container, Box, Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GitHubIcon from '@mui/icons-material/GitHub';
import Skillset from "./Skillset";
import Blog from "./Blog";
import About from "./About";
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(167deg, rgba(21,21,21,0) 0%, rgba(91,162,240,0.2889749649859944) 22%, rgba(91,162,240,0.3702074579831933) 41%, rgba(21,21,21,0) 56%)',
                zIndex: 1
            }} />
            <Container sx={{ position: 'relative', overflow: 'hidden' }}>
                <Box sx={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 7,
                    flexDirection: { sm: 'column' },
                    textAlign: { xs: 'center', sm: 'left' },
                    padding: 3
                }}>
                    <Box sx={{
                        borderRadius: '50%',
                        overflow: 'hidden',
                        height: 400,
                        width: 400,
                        minWidth: 400,
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: { xs: 2, sm: 0 },
                        background: 'linear-gradient(133deg, rgba(49,92,138,1) 17%, rgba(91,162,240,1) 92%)',
                    }}>
                        <img
                            src='/me.png'
                            alt='Memoji'
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top',
                            }}
                        />
                    </Box>
                    <Box sx={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        textAlign: 'center'
                    }}>
                        <Typography variant='h1' sx={{
                            marginBottom: { xs: 2, sm: 0 },
                            fontWeight: 'bolder',
                            background: 'linear-gradient(167deg, rgba(24,78,137,0.78) 44%, rgba(91,162,240,1) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}> 
                            Håkon Sunde
                        </Typography>
                        <Typography>{t('bio')}</Typography>
                        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center' }}>
                            <Button variant='contained' endIcon={<NavigateNextIcon />} sx={{ backgroundColor: 'linear-gradient(133deg, rgba(49,92,138,1) 17%, rgba(91,162,240,1) 92%)', '&:hover': { backgroundColor: '#2e4975' }, borderRadius: 20 }} disableRipple component={Link} to='/contact'>
                                {t('contact')}
                            </Button>
                            <Button endIcon={<GitHubIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} disableRipple style={{ backgroundColor: 'transparent' }} href='https://github.com/sundehakon' target='_blank'>
                                Github
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'row', gap: 1, marginTop: 5 }}>
                            <InfoIcon />
                            <Typography>Website translations are still a work in progress, some components might not have translations.</Typography>
                        </Box>
                    </Box>
                </Box> 
                <Skillset />
                <About />
                <Blog />
            </Container>
        </div>
    );
};

export default Home;
