import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography } from '@mui/material';

const Projects = ({ id }) => {
    const items = [
        {
            name: 'Hotell-React',
            description: 'This was created as a project for my programming class at school. It is designed to make hotel reservations easy both for the customer and staff. It aims to provide information about the hotel, meanwhile also providing functionality which makes the hotel experience that much better!',
            href: 'https://github.com/sundehakon/Hotell-React'
        },
        {
            name: 'SundeAI',
            description: 'A simple console based application which uses an API provided by Stability AI to generate images. This project was created with JavaScript and helped teach me about fetching data from APIs using JS and Node.',
            href: 'https://github.com/sundehakon/SundeAI'
        },
        {
            name: 'Portfolio',
            description: 'This is the portfolio you are currently viewing. It was created using React and Material-UI. It is designed to be a simple and clean portfolio which showcases my projects and skills.',
            href: 'https://github.com/sundehakon/Portfolio'
        },
        {
            name: 'SundeWeather',
            description: 'A simple weather application which uses an API provided by Norwegian state owned YR to fetch weather data. This project was created with ReactJS and helped teach me about fetching data from multiple APIs and making them work together.',
            href: 'https://sundeweather.netlify.app/'
        }
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Carousel sx={{ width: 500 }}>
                {items.map((item, i) => <Item key={i} item={item} id={id} />)}
            </Carousel>
        </Box>
    );
};

const Item = ({ item, id }) => {
    return (
        <div id={id}>
            <Box sx={{ height: 10, }}></Box>
            <Typography sx={{ textAlign: 'center', marginTop: 2 }} variant='h4'>projects</Typography>
            <Paper sx={{ padding: 5, marginTop: 4, borderRadius: 5, boxShadow: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <Typography variant='h5'>{item.name}</Typography>
                    <Typography sx={{ marginTop: 1 }}>{item.description}</Typography>
                    <Button sx={{ marginTop: 3 }} href={item.href} target='_blank'>Check it out!</Button>
                </Box>
            </Paper>
            <Box sx={{ padding: 1 }}></Box>
        </div>
    );
};

export default Projects;
