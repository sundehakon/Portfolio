import { useState } from 'react';
import { Typography, Box, Grid } from '@mui/material';

const skills = [
    { name: 'JavaScript', icon: '/skill-icons/js.png' },
    { name: 'React', icon: '/skill-icons/react.png' },
    { name: 'Node.js', icon: '/skill-icons/nodejs.png' },
    { name: 'Express.js', icon: '/skill-icons/express.png' },
    { name: 'C#', icon: '/skill-icons/csharp.png' },
    { name: 'Python', icon: '/skill-icons/python.png' },
    { name: 'HTML', icon: '/skill-icons/html.png' },
    { name: 'CSS', icon: '/skill-icons/css.png' },
    { name: 'Git', icon: '/skill-icons/git.png' },
    { name: 'MongoDB', icon: '/skill-icons/mongodb.png' },
    { name: 'Photoshop', icon: '/skill-icons/photoshop.png' },
    { name: 'Rust', icon: '/skill-icons/rust.png' },
    { name: 'Blazor', icon: '/skill-icons/blazor.png' },
    { name: 'Ruby', icon: '/skill-icons/ruby.png' },
];

const Skillset = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
            <Box sx={{ textAlign: 'center', marginTop: 20, marginBottom: 10 }}>
                <Typography variant='h4'>Skillset</Typography>
                <Grid
                    container
                    spacing={7}
                    justifyContent='center'
                    alignItems='center'
                    sx={{ marginTop: 3 }}
                >
                    {skills.map((item, index) => (
                        <Grid item key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    position: 'relative',
                                    '&:hover': {
                                        '& img': {
                                            transform: 'translateY(-10px)',
                                        },
                                        '& .fade-in-text': {
                                            opacity: 1,
                                        },
                                    },
                                }}
                                onMouseEnter={() => setHoveredSkill(item.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                <img src={item.icon} alt={item.name} style={{ height: 90, width: 90 }} />
                                <Typography variant="subtitle1" className="fade-in-text" sx={{
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease-in-out',
                                    position: 'absolute',
                                    bottom: -25,
                                    display: hoveredSkill === item.name ? 'visible' : 'hidden',
                                }}>
                                    {item.name}
                                </Typography>
                            </Box>                
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Skillset;