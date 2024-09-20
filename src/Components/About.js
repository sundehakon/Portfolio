import React from 'react';
import { Grid, Typography, Box, useMediaQuery } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FolderIcon from '@mui/icons-material/Folder';
import { useTranslation } from 'react-i18next';

const About = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const { t } = useTranslation();

    return (
        <Box>
            <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: 6 }}>
                {t('about')}
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
                        {t('development')}
                    </Typography>
                    <Typography>
                        {t('developmentbio')}
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
                        {t('myhistory')}
                    </Typography>
                    <Typography>
                        {t('myhistorybio')}
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
                        {t('projects')}
                    </Typography>
                    <Typography>
                        {t('projectsbio')}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
