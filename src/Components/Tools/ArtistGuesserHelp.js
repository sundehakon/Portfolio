import React, { useEffect, useState, useCallback } from 'react';
import { Box, Button, Modal, Paper, Typography, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
    const [minDebut, setMinDebut] = useState('');
    const [maxDebut, setMaxDebut] = useState('');
    const [minPopularity, setMinPopularity] = useState('');
    const [maxPopularity, setMaxPopularity] = useState('');
    const [error, setError] = useState('');
    const [artists, setArtists] = useState([]);

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

    const handleMinDebutChange = (event) => {
        setMinDebut(event.target.value);
    };

    const handleMaxDebutChange = (event) => {
        setMaxDebut(event.target.value);
    };

    const handleMinPopularityChange = (event) => {
        setMinPopularity(event.target.value);
    };

    const handleMaxPopularityChange = (event) => {
        setMaxPopularity(event.target.value);
    };

    const validateFields = useCallback(() => {
        const selectedGenresArray = Object.values(selectedGenres);
        const selectedGendersArray = Object.values(selectedGenders);
    
        if (
            !selectedGenresArray.includes(true) || 
            !selectedGendersArray.includes(true) || 
            !members || 
            (!minDebut && !maxDebut) ||
            (!minPopularity && !maxPopularity)
        ) {
            setError('More Information Needed!');
            return false;
        }
    
        setError('');
        return true;
    }, [selectedGenres, selectedGenders, members, minDebut, maxDebut, minPopularity, maxPopularity]);
    
    useEffect(() => {
        const fetchGenres = async () => {
            if (!validateFields()) return;

            const selectedGenresArray = Object.keys(selectedGenres).filter(genre => selectedGenres[genre]);
            const selectedGendersArray = Object.keys(selectedGenders).filter(genre => selectedGenders[genre]);

            if (selectedGenresArray.length > 0) {
                try {
                    const genreQuery = selectedGenresArray.join(',');
                    const genderQuery = selectedGendersArray.join(',');
                    const response = await axios.get(`http://localhost:8080/ArtistData?api_key=${process.env.REACT_APP_ARTIST_DATA_API_KEY}&genres=${genreQuery}&country=${countryCode}&members=${members}&gender=${genderQuery}&minDebut=${minDebut}&maxDebut=${maxDebut}&minPopularity=${minPopularity}&maxPopularity=${maxPopularity}`);
                    setArtists(response.data);
                } catch (error) {
                    console.error('Error fetching genres:', error);
                }
            }
        };

        fetchGenres();
    }, [validateFields, selectedGenres, countryCode, members, selectedGenders, minDebut, maxDebut, minPopularity, maxPopularity]);

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
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    bgcolor: 'background.paper',
                    p: 4,
                    gap: 3,
                }}>
                    <FormControl>
                        <FormLabel required>Choose Genre</FormLabel>
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
                    <FormControl required>
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
                    <FormControl required>
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
                    <FormControl>
                        <TextField
                            label='Minimum Debut'
                            variant='outlined'
                            value={minDebut}
                            onChange={handleMinDebutChange} 
                        />
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <FormHelperText>Minimum Debut Year, Icon:</FormHelperText><KeyboardArrowUpIcon />
                        </Box>
                    </FormControl>
                    <FormControl>
                        <TextField
                            label='Maximum Debut'
                            variant='outlined'
                            value={maxDebut}
                            onChange={handleMaxDebutChange} 
                        />
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <FormHelperText>Maximum Debut Year, Icon:</FormHelperText><KeyboardArrowDownIcon />
                        </Box>
                    </FormControl>
                    <FormControl>
                        <TextField
                            label='Minimum Popularity'
                            variant='outlined'
                            value={minPopularity}
                            onChange={handleMinPopularityChange} 
                        />
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <FormHelperText>Minimum Popularity, Icon:</FormHelperText><KeyboardArrowUpIcon />
                        </Box>
                    </FormControl>
                    <FormControl>
                        <TextField
                            label='Maximum Popularity'
                            variant='outlined'
                            value={maxPopularity}
                            onChange={handleMaxPopularityChange} 
                        />
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <FormHelperText>Maximum Popularity, Icon:</FormHelperText><KeyboardArrowDownIcon />
                        </Box>
                    </FormControl>
                    {error && <Typography color='error'>{error}</Typography>}
                    {!error && (
                        <>
                            <Typography variant="h6">Possible Solutions:</Typography>
                            <Box>
                                {artists.length > 0 ? (
                                    artists.map((artist, index) => (
                                        <Box key={index} sx={{ padding: 1 }}>
                                            <Typography>{artist.NAME}</Typography>
                                        </Box>
                                    ))
                                ) : (
                                    <Typography>No artists found.</Typography>
                                )}
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default ArtistGuesserHelp;