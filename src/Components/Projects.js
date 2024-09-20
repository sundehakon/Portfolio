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
                            SundeAI
                        </Typography>
                        <Typography sx={{ padding: 3, flexGrow: 1 }}>
                            {t('sundeaibio')}
                            <br /><br />
                            <strong>{t('keyfeatures')}</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('sundeaikeyfeature1')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('sundeaikeyfeature2')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('sundeaikeyfeature3')}
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
                        <img src='/screenshots/sundeai.png' alt='Human and polar bear hug' style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'cover', borderRadius: 20, padding: 10 }} />
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
                            Hotel "Havblikk"
                        </Typography>
                        <Typography sx={{ padding: 3, flexGrow: 1 }}>
                            {t('havblikkbio')}
                            <br /><br />
                            <strong>{t('keyfeatures')}</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('havblikkkeyfeature1')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('havblikkkeyfeature2')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('havblikkkeyfeature3')}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    {t('havblikkkeyfeature4')}
                                </ListItem>
                            </List>
                        </Typography>
                        <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
                            <Button endIcon={<GitHubIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} style={{ backgroundColor: 'transparent' }} disableRipple href='https://github.com/sundehakon/Hotell-React' target='_blank'>
                                Github
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <img src='/screenshots/hotellreact.png' alt='Hotel website screenshot' style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'cover', borderRadius: 20, padding: 10 }} />
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
