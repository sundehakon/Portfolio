import { Typography, Container, Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

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
                <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>Contact</Typography>
                <TextField 
                    label="Name" 
                    name="from_name" 
                    required 
                    fullWidth
                />
                <TextField 
                    label="Email" 
                    name="reply_to" 
                    type="email" 
                    required 
                    fullWidth
                />
                <TextField 
                    label="Message" 
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
                        backgroundColor: 'rgba(0, 0, 0, 0.76)', 
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.64)' }, 
                        borderRadius: 20, 
                        width: { xs: '100%', sm: 200 } 
                    }} 
                    disableRipple
                    disabled={isSubmitting}
                >
                    Send
                </Button>
                {stateMessage && <Typography variant="body1" color="textSecondary" align="center">{stateMessage}</Typography>}
            </Box>
        </Container>
    );
};

export default Contact;