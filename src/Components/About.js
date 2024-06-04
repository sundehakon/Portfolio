import React from 'react';
import { Grid, Typography, Box, useMediaQuery, Divider } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FolderIcon from '@mui/icons-material/Folder';

const About = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <Box>
            <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: 6 }}>
                About
            </Typography>
            <Grid container spacing={3} justifyContent="center" sx={{ marginBottom: 10 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box
                        sx={{
                            border: 1,
                            height: 52,
                            width: 52,
                            borderRadius: '50%',
                            borderColor: 'divider',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <AppleIcon sx={{ height: 32, width: 32 }} />
                    </Box>
                    <Typography variant='h6' sx={{ marginBottom: 2, marginTop: 1 }}>
                        Development
                    </Typography>
                    <Typography>
                        As most developers, I am fond of using various operating systems for project development. Currently, I use a MacBook Pro and Visual Studio Code for most of my work. I also have experience with Linux and Windows.
                    </Typography>
                </Grid>
                {isSmallScreen && <Grid item xs={12} sx={{ height: 16 }} />} 
                <Grid item xs={12} sm={6} md={4}>
                    <Box
                        sx={{
                            border: 1,
                            height: 52,
                            width: 52,
                            borderRadius: '50%',
                            borderColor: 'divider',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <FingerprintIcon sx={{ height: 32, width: 32 }} />
                    </Box>
                    <Typography variant='h6' sx={{ marginBottom: 2, marginTop: 1 }}>
                        My History
                    </Typography>
                    <Typography>
                        I was born on November 16, 2007, in Oslo, Norway. I've lived in Lillestrøm most of my life, a medium-sized city just outside Oslo. I started programming a few years ago, influenced by school and social media. Now, I code every day for school!
                    </Typography>
                </Grid>
                {isSmallScreen && <Grid item xs={12} sx={{ height: 16 }} />}
                <Grid item xs={12} sm={6} md={4}>
                    <Box
                        sx={{
                            border: 1,
                            height: 52,
                            width: 52,
                            borderRadius: '50%',
                            borderColor: 'divider',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <FolderIcon sx={{ height: 32, width: 32 }} />
                    </Box>
                    <Typography variant='h6' sx={{ marginBottom: 2, marginTop: 1 }}>
                        Projects
                    </Typography>
                    <Typography>
                        Building projects is one of my favorite ways to learn to code. Over the years, I've created weather applications using APIs, a hotel webpage, and a console-based application for generating AI-based images using Stability AI. Check out my projects!
                    </Typography>
                </Grid>
            </Grid>
            <Divider />
        </Box>
    );
};

export default About;
