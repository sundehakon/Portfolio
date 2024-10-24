import { Typography, Container, Box, Button, List, ListItem, ListItemIcon } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';

const Projects = () => {
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
                zIndex: -1
            }} />
            <Container>
                <Box sx={{
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden',
                    mb: 4,
                    marginTop: 4
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Typography variant='h4' sx={{ padding: 3 }}>
                            SundeWeather
                        </Typography>
                        <Typography sx={{ padding: 3, flexGrow: 1 }}>
                            {t('sundeweatherbio')}
                            <br /><br />
                            <strong>{t('keyfeatures')}</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('sundeweatherkeyfeature1')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('sundeweatherkeyfeature2')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('sundeweatherkeyfeature3')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('sundeweatherkeyfeature4')}
                                </ListItem>
                            </List>
                        </Typography>
                        <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
                            <Button variant='contained' endIcon={<LanguageIcon />} sx={{  backgroundColor: 'linear-gradient(133deg, rgba(49,92,138,1) 17%, rgba(91,162,240,1) 92%)', '&:hover': { backgroundColor: '#2e4975' }, borderRadius: 20 }} disableRipple href='https://sundeweather.software/' target='_blank'>
                                {t('website')}
                            </Button>
                            <Button endIcon={<GitHubIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} style={{ backgroundColor: 'transparent' }} disableRipple href='https://github.com/sundehakon/SundeWeather' target='_blank'>
                                Github
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <img src='/screenshots/sundeweather.png' alt='Screenshot of SundeWeather' style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'cover', borderRadius: 20, padding: 10 }} />
                    </Box>
                </Box>
                <Box sx={{
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden',
                    mb: 4,
                    marginTop: 4
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Typography variant='h4' sx={{ padding: 3 }}>
                            TODO-CLI
                        </Typography>
                        <Typography sx={{ padding: 3, flexGrow: 1 }}>
                            {t('todoclibio')}
                            <br /><br />
                            <strong>{t('keyfeatures')}</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('todoclikeyfeature1')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('todoclikeyfeature2')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('todoclikeyfeature3')}
                                </ListItem>
                            </List>
                        </Typography>
                        <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
                            <Button endIcon={<GitHubIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} style={{ backgroundColor: 'transparent' }} disableRipple href='https://github.com/sundehakon/TODO-CLI' target='_blank'>
                                Github
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <img src='/screenshots/todocli.png' alt='Command line interface of To-Do application' style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'cover', borderRadius: 20, padding: 10 }} />
                    </Box>
                </Box>
                <Box sx={{
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden',
                    mb: 4,
                    marginTop: 4
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Typography variant='h4' sx={{ padding: 3 }}>
                            Image Compressor
                        </Typography>
                        <Typography sx={{ padding: 3, flexGrow: 1 }}>
                            I was interested in learning Rust with WebAssembly, so I started working on this very simple image compressing project. It uses an image compressor cargo crate for backend operations with Rust, and then HTML and JavaScript for rendering it on the web. Design is standard HTML with no thought behind it. 
                            <br /><br />
                            <strong>{t('keyfeatures')}</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Displays original image and compressed image byte size
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Quick compressing speeds
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Hosted online using Github Pages
                                </ListItem>
                            </List>
                        </Typography>
                        <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
                        <Button variant='contained' endIcon={<LanguageIcon />} sx={{  backgroundColor: 'linear-gradient(133deg, rgba(49,92,138,1) 17%, rgba(91,162,240,1) 92%)', '&:hover': { backgroundColor: '#2e4975' }, borderRadius: 20 }} disableRipple href='https://sundehakon.github.io/Compressor/' target='_blank'>
                                {t('website')}
                            </Button>
                            <Button endIcon={<GitHubIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} style={{ backgroundColor: 'transparent' }} disableRipple href='https://github.com/sundehakon/Compressor' target='_blank'>
                                Github
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <img src='/screenshots/compressor.png' alt='Web interface of a compressor' style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'cover', borderRadius: 20, padding: 10 }} />
                    </Box>
                </Box>
                <Box sx={{
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden',
                    mb: 4,
                    marginTop: 4
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Typography variant='h4' sx={{ padding: 3 }}>
                            SundeWeather 2.0
                        </Typography>
                        <Typography sx={{ padding: 3, flexGrow: 1 }}>
                            A spin on one of my first projects SundeWeather. This version is console based and is made using the Rust programming language. It fetches fresh weather data from OpenWeatherMap API, and displays the info in a informative string of text. 
                            <br /><br />
                            <strong>{t('keyfeatures')}</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Accurate weather data
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Console application
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Quick fetching speeds
                                </ListItem>
                            </List>
                        </Typography>
                        <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
                            <Button endIcon={<GitHubIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} style={{ backgroundColor: 'transparent' }} disableRipple href='https://github.com/sundehakon/SundeAI' target='_blank'>
                                Github
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <img src='/screenshots/rustweather_finished.png' alt='Console text from weather app' style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'cover', borderRadius: 20, padding: 10 }} />
                    </Box>
                </Box>
                <Box sx={{
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden',
                    mb: 4,
                    marginTop: 4
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Typography variant='h4' sx={{ padding: 3 }}>
                            RubyCaesar
                        </Typography>
                        <Typography sx={{ padding: 3, flexGrow: 1 }}>
                            {t('rubyceasarbio')}
                            <br /><br />
                            <strong>{t('keyfeatures')}</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('rubyceasarkeyfeature1')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('rubyceasarkeyfeature2')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('rubyceasarkeyfeature3')}
                                </ListItem>
                            </List>
                        </Typography>
                        <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
                            <Button endIcon={<GitHubIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} style={{ backgroundColor: 'transparent' }} disableRipple href='https://github.com/sundehakon/Caesar' target='_blank'>
                                Github
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <img src='/screenshots/rubycaesar.png' alt='CLI screenshot' style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'cover', borderRadius: 20, padding: 10 }} />
                    </Box>
                </Box>
                <Box sx={{
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden',
                    mb: 4,
                    marginTop: 4
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Typography variant='h4' sx={{ padding: 3 }}>
                            Blog-Editor
                        </Typography>
                        <Typography sx={{ padding: 3, flexGrow: 1 }}>
                            Rust program designed as a terminal based editor for my blog which is published on my personal website. This allows me to make quick changes to the PortfolioAPI with easy log in logic for POST requests. It can also handle GET request for displaying active blog posts and allow DELETE requests for you know, deleting blog posts. The program has a working CLI which allows the user to easily choose between actions. 
                            <br /><br />
                            <strong>{t('keyfeatures')}</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Built-in logic for the express-basic-auth PortfolioAPI uses for POST requests
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Terminal-based CLI
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Fast and efficient handling of GET and DELETE requests
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Feature for hiding password input
                                </ListItem>
                            </List>
                        </Typography>
                        <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
                            <Button endIcon={<GitHubIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} style={{ backgroundColor: 'transparent' }} disableRipple href='https://github.com/sundehakon/Blog-Editor' target='_blank'>
                                Github
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <img src='/screenshots/blog-editor.png' alt='Screenshot of code' style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'cover', borderRadius: 20, padding: 10 }} />
                    </Box>
                </Box>
                <Box sx={{
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden',
                    mb: 4,
                    marginTop: 4
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <Typography variant='h4' sx={{ padding: 3 }}>
                            Catch The Ball!
                        </Typography>
                        <Typography sx={{ padding: 3, flexGrow: 1 }}>
                            {t('catchtheballbio')}
                            <br /><br />
                            <strong>{t('keyfeatures')}</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('catchtheballkeyfeature1')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('catchtheballkeyfeature2')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('catchtheballkeyfeature3')}
                                </ListItem>
                            </List>
                        </Typography>
                        <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
                            <Button endIcon={<GitHubIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} style={{ backgroundColor: 'transparent' }} disableRipple href='https://github.com/sundehakon/CatchTheBall' target='_blank'>
                                Github
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <img src='/screenshots/catchtheball.png' alt='Minigame screenshot' style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'cover', borderRadius: 20, padding: 10 }} />
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Projects;
