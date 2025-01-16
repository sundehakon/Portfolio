import React, { useEffect, useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';

const ArtistGuesserHelp = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', textAlign: 'center' }}>
        <Paper sx={{ height: 300, width: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 3 }} elevation={3}>
            <PublicIcon />
            <Typography variant='h4'>ArtistGuesserHelp</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            </Box>
            <Button variant='outlined'>Open</Button>
        </Paper>
        </Box>
    );
};

export default ArtistGuesserHelp;