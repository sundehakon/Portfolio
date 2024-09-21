import { Typography, Container, Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const { t } = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs 
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID, 
                e.target,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                }
            );

        e.target.reset();
    };

    return (
        <div>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(167deg, rgba(21,21,21,0) 0%, rgba(91,162,240,0.2889749649859944) 22%, rgba(91,162,240,0.3702074579831933) 41%, rgba(21,21,21,0) 56%)',
                zIndex: -1
            }} />
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh',  
                }}
            >
                <Box 
                    component="form" 
                    onSubmit={sendEmail} 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 2, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        width: { xs: '90%', sm: '80%', md: '60%', lg: '50%' },
                        mx: 'auto'  
                    }}
                >
                    <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>{t('emailtitle')}</Typography>
                    <TextField 
                        label={t('name')}
                        name="from_name" 
                        required 
                        fullWidth
                    />
                    <TextField 
                        label={t('email')}
                        name="reply_to" 
                        type="email" 
                        required 
                        fullWidth
                    />
                    <TextField 
                        label={t('message')}
                        name="message" 
                        multiline 
                        rows={4} 
                        required 
                        fullWidth
                    />
                    <Button 
                        type="submit"
                        variant="contained" 
                        endIcon={<SendIcon />} 
                        sx={{ 
                            backgroundColor: 'linear-gradient(133deg, rgba(49,92,138,1) 17%, rgba(91,162,240,1) 92%)', 
                            '&:hover': { backgroundColor: '#2e4975' },
                            borderRadius: 20, 
                            width: { xs: '100%', sm: 200 } 
                        }} 
                        disableRipple
                        disabled={isSubmitting}
                    >
                        {t('send')}
                    </Button>
                    {stateMessage && <Typography variant="body1" color="textSecondary" align="center">{stateMessage}</Typography>}
                </Box>
            </Container>
        </div>
    );
};

export default Contact;