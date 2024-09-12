import { Typography, Container, Box, Button, List, ListItem, ListItemIcon } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Projects = () => {
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
                            Website created using React which utilizes APIs from Yr and OpenCage to bring weather data for the user based on a search query. The website also offers an interactive map solution where the user can input their location on the map, or use their own and receive the weather data for that location almost immediately. 
                            <br /><br />
                            <strong>Key features:</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Real-time weather updates based on user queries
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Interactive map for location-based weather information
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Responsive design for optimal viewing on all devices
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Accurate geocoding using OpenCage API
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
                            A simple CLI todo list application. The application allows the user to add, remove, and list tasks. The tasks are stored in a JSON file, and the application is built using the Rust programming language. The program also has a motivational feature which fetches a random quote to help the user on it's journey to finish their daily chores.
                            <br /><br />
                            <strong>Key features:</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Add, remove, and list tasks
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    JSON file storage for tasks
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Motivational quotes for the user
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
                            Console based application for generating AI images based on a text search query by the user. The project uses a Stability AI API, and their engine to generate, but handles UI and the request sent to the generator.
                            <br /><br />
                            <strong>Key features:</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    API fetch from state of the art AI image engine
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Customizable fetch queries for the user
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Quick generating speeds
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
                            One of my first Ruby projects. It's a console based application which works as a mini app where you can add a string which is then encrypted using the caesar cipher. From the built in menu you can see the encrypted message, or view the decrypted message that you just wrote in. It is not intended to store passwords and such just a fun application where the user can see the encryption for themselves.
                            <br /><br />
                            <strong>Key features:</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Caesar cipher encryption
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    User input for custom strings
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Decryption of the encrypted string
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
                            Website created for a fictional hotel in Norway. The website provides functionality for both the staff at the hotel and visitors. Users can rent rooms, and staff can check incoming reservations. This project was created because of a school project, using React and Material UI for a sleek and modern design. 
                            <br /><br />
                            <strong>Key features:</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Room reservations and overview of orders
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Modern design which showcases the fictional hotel
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    3D model of hotel room
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    User authentication with Auth0
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
                            Small minigame which was created as a math class project. It uses Pygame with Python to create a simple game where the player has to catch the ball with a paddle. The game has a scoring system and a high score system, and the player can play until they lose by reaching a minimum, or win if they hit the maximum.
                            <br /><br />
                            <strong>Key features:</strong>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Point system with win and lose screens
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Engaging backgroud and UI
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                    Easily understandable controls
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
