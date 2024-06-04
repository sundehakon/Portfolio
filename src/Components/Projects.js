import { Typography, Container, Box, Button, List, ListItem, ListItemIcon } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Projects = () => {
    return (
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
                        Website created using React which utilizes APIs from Yr and OpenCage to bring weather data for the user based on a search query. The website also offers an interactive map solution where the user can input their location on the map, or use their own and receive the weather data for that location almost immediately. 
                        <br /><br />
                        <strong>Key features:</strong>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon />
                                </ListItemIcon>
                                Real-time weather updates based on user queries.
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon />
                                </ListItemIcon>
                                Interactive map for location-based weather information.
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon />
                                </ListItemIcon>
                                Responsive design for optimal viewing on all devices.
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon />
                                </ListItemIcon>
                                Accurate geocoding using OpenCage API.
                            </ListItem>
                        </List>
                    </Typography>
                    <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
                        <Button variant='contained' endIcon={<LanguageIcon />} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.76)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.64)' }, borderRadius: 20 }} disableRipple href='https://sundeweather.software/' target='_blank'>
                            Website
                        </Button>
                        <Button endIcon={<GitHubIcon />} sx={{ color: 'rgba(0, 0, 0, 0.87)' }} style={{ backgroundColor: 'transparent' }} disableRipple href='https://github.com/sundehakon/SundeWeather' target='_blank'>
                            Github
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <img src='/screenshots/sundeweather.png' alt='Weather Application' style={{ maxHeight: 400, maxWidth: '100%', objectFit: 'cover', borderRadius: 20, padding: 10 }} />
                </Box>
            </Box>
        </Container>
    );
};

export default Projects;
