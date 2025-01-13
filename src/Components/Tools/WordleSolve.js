import React, { useEffect, useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import axios from 'axios';
import PublicIcon from '@mui/icons-material/Public';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const WordleSolve = () => {
  const [wordleData, setWordleData] = useState(null);
  const [reveal, setReveal] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (date) => {
      try {
        const response = await axios.get(`https://wordle.bludood.com/api/wordles`);
        console.log('API Response:', response.data); 
        setWordleData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setWordleData(null); 
        setLoading(false);
      }
    };

    if (currentDate) {
      fetchData(currentDate);
    }
  }, [currentDate]);

  const changeDate = (direction) => {
    const date = new Date(currentDate);
    if (direction === 'forward') {
      date.setDate(date.getDate() + 1);
    } else if (direction === 'backward') {
      date.setDate(date.getDate() - 1);
    }
    const formattedDate = date.toISOString().split('T')[0];
    setCurrentDate(formattedDate);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', textAlign: 'center' }}>
      <Paper
        sx={{
          height: 300,
          width: 500,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 3,
        }}
        elevation={3}
      >
        <PublicIcon />
        <Typography variant="h4">Wordle Answer</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            onClick={() => changeDate('backward')}
            sx={{ '&:hover': { backgroundColor: 'transparent', boxShadow: 'none' } }}
            disableElevation
            disableRipple
          >
            <ArrowBackIosIcon />
          </Button>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {currentDate}
          </Typography>
          <Button
            onClick={() => changeDate('forward')}
            sx={{ '&:hover': { backgroundColor: 'transparent', boxShadow: 'none' } }}
            disableElevation
            disableRipple
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <>
            {reveal === false && <Button variant="outlined" onClick={() => setReveal(true)}>Reveal</Button>}
            {reveal === true && (
              <Typography>
                {wordleData?.solution || 'No Answer Available'}
              </Typography>
            )}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default WordleSolve;
