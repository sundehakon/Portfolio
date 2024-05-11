import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Card, Button, Box, Typography } from '@mui/material'

function Projects(props)
{
    var items = [
        {
            name: "Hotell-React",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Carousel sx={{ width: 500 }}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Box>
    )
}

function Item(props)
{
    return (
        <div>
        <Card>
            <Typography variant='h4'>{props.item.name}</Typography>
            <Typography>{props.item.description}</Typography>

            <Button>
                Check it out!
            </Button>
        </Card>
        <Box sx={{ padding: 2 }}></Box>
        </div>
    )
}

export default Projects;