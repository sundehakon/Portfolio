import { Box, Typography, TextField, IconButton, Snackbar, Grid, Paper, Modal, useMediaQuery } from '@mui/material';
import LoginButton from '../login';
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const Blog = () => {
    const { user } = useAuth0();
    const [blogs, setBlog] = useState([]);
    const [comments, setComment] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [commentContent, setCommentContent] = useState('');
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        const fetchBlog = async () => { 
            try {
                const response = await axios.get('https://portfolioapi-hysa.onrender.com/api/Blogs');
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching orders', error);
            }
        };

        const fetchComment = async () => {
            try {
                if (user) {
                    const response = await axios.get('https://portfolioapi-hysa.onrender.com/api/Comments');
                    setComment(response.data);
                }
            } catch (error) {
                console.error('Error fetching comments', error);
            }
        };

        fetchBlog();
        fetchComment();
    }, [user, setBlog, setComment]);

    const handleSubmitComment = async () => {
        try {
            const userComments = comments.filter(comment => comment.userId === user?.sub);
            const maxCommentsPerUser = 10; 
            if (userComments.length >= maxCommentsPerUser) {
                console.log('You have reached the maximum comment limit.');
                setOpen(true);
                return;
            }
            const response = await axios.post('https://portfolioapi-hysa.onrender.com/api/Comments', {
                postId: selectedBlog?._id,
                userId: user?.sub,
                userPicture: user?.picture,
                userName: user?.nickname,
                content: commentContent,
                date: new Date().toISOString(),
            });

            setComment([...comments, response.data]);
            setCommentContent('');
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    const confirmDelete = (
        <React.Fragment>
            <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={handleSnackbarClose}
            >
                <CloseIcon fontSize='small' />
            </IconButton>
        </React.Fragment>
    )

    const handleOpen = (blog) => {
        setSelectedBlog(blog);
    };

    const handleClose = () => {
        setSelectedBlog(null);
    };

    return (
        <div>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '90%', maxWidth: 1200 }}>
                    <Typography sx={{ textAlign: 'center', paddingTop: 4, color: '#151515' }} variant='h4'>
                        blog
                    </Typography>
                    <Grid container spacing={3} sx={{ marginTop: 3, gap: 10 }} justifyContent={isMobile ? 'center' : 'center'}>
                        {blogs.map((blog, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        width: '87%',
                                        height: '50%',
                                        cursor: 'pointer',
                                        padding: 5,
                                        borderRadius: 10,
                                        display: 'flex',
                                        gap: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        }
                                    }}
                                    onClick={() => handleOpen(blog)}
                                >
                                    <Typography variant='h6'>{blog.title}</Typography>
                                    <Typography>{blog.date}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Modal open={selectedBlog !== null} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: 10,
                        p: 8,
                        maxWidth: '90%',
                        maxHeight: '90%',
                        overflow: 'auto',
                        outline: 'none',
                    }}>
                    <Typography variant='h4'>{selectedBlog?.title}</Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginTop: 2 }}>
                        <Typography>written by {selectedBlog?.author}</Typography>
                        <Typography>{selectedBlog?.date}</Typography>
                    </Box>
                    <Typography sx={{ marginBottom: 3, marginTop: 2 }}>{selectedBlog?.content}</Typography>
                    <hr />
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Comments</Typography>
                    {user && selectedBlog?._id && (
                        <>
                            {comments
                                .filter((comment) => comment.postId === selectedBlog._id)
                                .map((comment, index) => (
                                    <Box key={index} sx={{ marginTop: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <img src={comment.userPicture} alt='Profile pic' style={{ width: 37, height: 37, borderRadius: '50%' }} />
                                        <Box>
                                            <Typography sx={{ fontWeight: 'bold' }}>{comment.userName}</Typography>
                                            <Typography>{comment.content}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            {selectedBlog?._id && comments.filter((comment) => comment.postId === selectedBlog._id).length === 0 && (
                                <Typography sx={{ marginTop: 2 }}>No comments</Typography>
                            )}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TextField
                                    variant='outlined'
                                    label='Write comment'
                                    sx={{ marginTop: 3, width: 730 }}
                                    value={commentContent}
                                    onChange={(e) => setCommentContent(e.target.value)}
                                />
                                <IconButton onClick={handleSubmitComment} sx={{ marginTop: 3 }}>
                                    <SendIcon />
                                </IconButton>
                            </Box>
                        </>
                    )}
                    {!user && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography>Login to view comments</Typography>
                            <LoginButton />
                        </Box>
                    )}
                </Box>
            </Modal>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message='You have reached the maximum comment limit'
                action={confirmDelete}
            />
        </div>
    );
};

export default Blog;
