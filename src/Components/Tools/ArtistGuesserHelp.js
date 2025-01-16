import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Paper, Typography, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, TextField, Select, MenuItem, InputLabel } from '@mui/material';
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
    const [selectedGenders, setSelectedGenders] = useState({
        male: true,
        female: true,
        mixed: true,
    });
    const [countryCode, setCountryCode] = useState('');
    const [members, setMembers] = useState('');

    const handleGenreChange = (event) => {
        setSelectedGenres({
            ...selectedGenres,
            [event.target.name]: event.target.checked,
        });
    };

    const handleGenderChange = (event) => {
        setSelectedGenders({
            ...selectedGenders,
            [event.target.name]: event.target.checked,
        });
    };

    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value); 
    };

    const handleMembersChange = (event) => {
        setMembers(event.target.value);
    };

    useEffect(() => {
        const fetchGenres = async () => {
            const selectedGenresArray = Object.keys(selectedGenres).filter(genre => selectedGenres[genre]);

            if (selectedGenresArray.length > 0) {
                try {
                    const genreQuery = selectedGenresArray.join(',');
                    const response = await axios.get(`http://localhost:8080/ArtistData?api_key=${process.env.REACT_APP_ARTIST_DATA_API_KEY}&genres=${genreQuery}&country=${countryCode}&members=${members}`);
                    console.log(response.data);
                } catch (error) {
                    console.error('Error fetching genres:', error);
                }
            }
        };

        fetchGenres();
    }, [selectedGenres, countryCode, members]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', textAlign: 'center' }}>
            <Paper sx={{ height: 300, width: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 3 }} elevation={3}>
                <MusicNoteIcon />
                <Typography variant='h4'>Artist Guesser Help</Typography>
                <Button variant='outlined' onClick={handleOpen}>Open</Button>
                <Typography>Cheating tool for the 'Artist Guesser' minigame on Soundmap</Typography>
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 5,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    p: 4,
                    gap: 3,
                }}>
                    <FormControl>
                        <FormLabel component='legend'>Choose Genre</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenres.pop} onChange={handleGenreChange} name='pop' />
                                }
                                label='Pop'
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenres.hiphop} onChange={handleGenreChange} name='hiphop' />
                                }
                                label='Hip-Hop'
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenres.rnb} onChange={handleGenreChange} name='rnb' />
                                }
                                label='R&B'
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenres.indie} onChange={handleGenreChange} name='indie' />
                                }
                                label='Indie'
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenres.rock} onChange={handleGenreChange} name='rock' />
                                }
                                label='Rock'
                            />
                        </FormGroup>
                        <FormHelperText>Check genres that can be correct</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel component='legend'>Choose Gender</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenders.male} onChange={handleGenderChange} name='male' />
                                }
                                label='Male'
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenders.female} onChange={handleGenderChange} name='female' />
                                }
                                label='Female'
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={selectedGenders.mixed} onChange={handleGenderChange} name='mixed' />
                                }
                                label='Mixed'
                            />
                        </FormGroup>
                        <FormHelperText>Check genders that can be correct</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <TextField
                            label='Country Code'
                            variant='outlined'
                            value={countryCode}
                            onChange={handleCountryCodeChange} 
                        />
                        <FormHelperText>Enter Correct Country Code e.g. 'US'</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Members</InputLabel>
                        <Select
                            value={members}
                            label='Members'
                            onChange={handleMembersChange}
                        >
                            <MenuItem value={'Solo'}>Solo</MenuItem>
                            <MenuItem value={'Group'}>Group</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Modal>
        </Box>
    );
};

export default ArtistGuesserHelp;