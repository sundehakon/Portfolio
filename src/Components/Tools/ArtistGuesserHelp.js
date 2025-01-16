import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Paper, Typography, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import axios from 'axios';

const ArtistGuesserHelp = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [selectedGenres, setSelectedGenres] = useState({
        pop: true,
        hiphop: true,
        rnb: true,
        indie: true,
        rock: true,
    });

    const handleChange = (event) => {
        setSelectedGenres({
            ...selectedGenres,
            [event.target.name]: event.target.checked,
        });
    };

    useEffect(() => {
        const fetchGenres = async () => {
            const selectedGenresArray = Object.keys(selectedGenres).filter(genre => selectedGenres[genre]);

            if (selectedGenresArray.length > 0) {
                try {
                    const genreQuery = selectedGenresArray.join(',');
                    const response = await axios.get(`http://localhost:8080/ArtistData?api_key=${process.env.REACT_APP_ARTIST_DATA_API_KEY}&genres=${genreQuery}`);
                    console.log(response.data);
                } catch (error) {
                    console.error('Error fetching genres:', error);
                }
            }
        };

        fetchGenres();
    }, [selectedGenres]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', textAlign: 'center' }}>
            <Paper sx={{ height: 300, width: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 3 }} elevation={3}>
                <MusicNoteIcon />
                <Typography variant='h4'>ArtistGuesserHelp</Typography>
                <Button variant='outlined' onClick={handleOpen}>Open</Button>
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    p: 4,
                }}>
                    <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
                        <FormLabel component='legend'>Choose Genre</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenres.pop} onChange={handleChange} name='pop' />
                                }
                                label='Pop'
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenres.hiphop} onChange={handleChange} name='hiphop' />
                                }
                                label='Hip-Hop'
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenres.rnb} onChange={handleChange} name='rnb' />
                                }
                                label='R&B'
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenres.indie} onChange={handleChange} name='indie' />
                                }
                                label='Indie'
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenres.rock} onChange={handleChange} name='rock' />
                                }
                                label='Rock'
                            />
                        </FormGroup>
                        <FormHelperText>Check genres that should be included in search</FormHelperText>
                    </FormControl>
                </Box>
            </Modal>
        </Box>
    );
};

export default ArtistGuesserHelp;