import { Divider, Grid, Typography, Box } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FolderIcon from '@mui/icons-material/Folder';

const About = () => {
    return (
        <Box>
            <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: 10 }}>About</Typography>
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={3.5} sx={{ height: 350 }}>
                    <Box sx={{ border: 1, height: 52, width: 52, borderRadius: '50%', borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AppleIcon sx={{ height: 32, width: 32 }}/>
                    </Box>
                    <Typography variant='h6' sx={{ marginBottom: 2, marginTop: 1 }}>Development</Typography>
                    <Typography>
                        As most developers I am quite fond of using a variety of operating systems for development of projects. 
                        At the moment I am using a MacBook Pro and Visual Studio Code for most of my projects. I have experience
                        however in the likes of both Linux and Windows.    
                    </Typography>
                </Grid>
                <Divider orientation='vertical' flexItem sx={{ padding: 2 }}/>
                <Grid item xs={3.5} sx={{ height: 350 }}>
                    <Box sx={{ border: 1, height: 52, width: 52, borderRadius: '50%', borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FingerprintIcon sx={{ height: 32, width: 32 }}/>
                    </Box>
                    <Typography variant='h6' sx={{ marginBottom: 2, marginTop: 1 }}>My History</Typography>
                    <Typography>
                        I was born on the 16th of November 2007 in Oslo, Norway. I have lived in Lillestrøm most of my life,
                        which is a medium sized city right outside of Oslo. I started programming a few years ago, the interest
                        came from school and social media which influenced me to try it. I got into it quick, and now I do it every day 
                        for school!
                    </Typography>
                </Grid>
                <Divider orientation='vertical' flexItem sx={{ padding: 2 }}/>
                <Grid item xs={3.5} sx={{ height: 350 }}>
                    <Box sx={{ border: 1, height: 52, width: 52, borderRadius: '50%', borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FolderIcon sx={{ height: 32, width: 32 }}/>
                    </Box>
                    <Typography variant='h6' sx={{ marginBottom: 2, marginTop: 1 }}>Projects</Typography>
                    <Typography>
                        One of my favorite ways of learning to code is just building projects. Over these last few years I have put my skills
                        to the test in creating weather applications with APIs, a webpage built for a hotel and a console based application for 
                        generating AI based images using Stability API. Head over to projects and check it out...
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
