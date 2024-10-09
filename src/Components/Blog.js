import { Typography, Container, Box, Paper, Divider, CircularProgress, Button, IconButton, Modal, Avatar, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';
import SendIcon from '@mui/icons-material/Send';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [comments, setComments] = useState([]);
    const [commentContent, setCommentContent] = useState('');
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const openCommentModal = (blog) => {
        setSelectedBlog(blog);
        setOpen(true);
    };
    const closeCommentModal = () => setOpen(false);
    const { isAuthenticated, user } = useAuth0();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://api.sundehakon.tech/Blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs', error);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await axios.get('https://api.sundehakon.tech/Comments');
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments', error);
            }
        };

        fetchBlogs();
        fetchComments();
    }, []);

    const handleSubmitComment = async () => {
        try {
            const userComments = comments.filter(comment => comment.userId === user?.sub);
            const maxCommentsPerUser = 10;
            
            if (userComments.length >= maxCommentsPerUser) {
                console.log('You have reached the maximum comment limit.');
                setOpen(true);
                return;
            }

            const response = await axios.post('https://api.sundehakon.tech/Comments', {
                post_id: selectedBlog._id,
                user_id: user.sub,
                user_picture: user.picture,
                user_name: user.nickname,
                content: commentContent,
                date: new Date().toISOString(),
            });

            setComments([...comments, response.data]);
            setCommentContent('');
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Container>
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'flex-start', 
                flexWrap: 'wrap',  
                gap: { xs: 2, sm: 3, md: 5 } 
            }}>
                {blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <Box key={index} sx={{ 
                            width: { xs: '100%', sm: '80%', md: '45%' },  
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            position: 'relative', 
                            mt: 2, 
                            marginBottom: 10 
                        }}>
                            <Paper sx={{ 
                                width: '100%',  
                                borderRadius: 3, 
                                overflow: 'hidden', 
                                marginTop: { xs: 5, sm: 5, md: 8 },
                                transition: '0.3s',
                                boxShadow: 3 
                            }} elevation={2}>
        
                                <Box sx={{ 
                                    background: 'linear-gradient(133deg, rgba(49,92,138,1) 17%, rgba(91,162,240,1) 92%)', 
                                    height: { xs: 200, sm: 250, md: 300 },  
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    padding: { xs: 2, md: 3 }  
                                }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 3, textAlign: 'center' }}>
                                        <Typography sx={{ color: 'white', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>{blog.title}</Typography>
                                        <Typography sx={{ color: 'white', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }}>- {blog.author}</Typography>
                                        <Typography sx={{ color: 'white', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>{blog.date}</Typography>
                                        <IconButton onClick={() => openCommentModal(blog)}>
                                            <CommentOutlinedIcon sx={{ color: 'white' }}/>
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Divider />
                                <Box sx={{ 
                                    display: '-webkit-box',
                                    WebkitLineClamp: expandedIndex === index ? 'none' : 5, 
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden', 
                                    margin: { xs: 2, md: 3 },
                                    padding: { xs: 1, md: 2 },
                                    wordBreak: 'break-word'  
                                }}>
                                    <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>{blog.content}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button onClick={() => toggleExpand(index)} sx={{ margin: 2 }}>
                                        {expandedIndex === index ? <ArrowUpward /> : <ArrowDownward />}
                                    </Button>
                                </Box>
                            </Paper>
                        </Box>
                    ))
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                        <CircularProgress />
                    </Box>
                )}
                {selectedBlog && (
                    <Modal 
                        open={open} 
                        onClose={closeCommentModal}
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Paper sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: 500, width: 400, borderRadius: 3, padding: 5, gap: 3 }}>
                            <Typography variant='h5'>Comments</Typography>
                            {isAuthenticated ? (
                                comments.filter(comment => comment.post_id === selectedBlog._id).length > 0 ? (
                                    comments
                                        .filter(comment => comment.post_id === selectedBlog._id)
                                        .map((comment, index) => (
                                            <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, alignSelf: 'flex-start' }}>
                                                <Avatar src={comment.user_picture} />
                                                <Box>
                                                    <Typography sx={{ fontWeight: 'bold' }}>{comment.user_name}</Typography>
                                                    <Typography>{comment.content}</Typography>
                                                </Box>
                                            </Box>
                                        ))
                                ) : (
                                    <Typography>No comments found.</Typography>
                                )
                            ) : (
                                <LoginButton />
                            )}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%', marginTop: 2 }}>
                                <TextField
                                    variant='outlined'
                                    label='Write comment'
                                    fullWidth
                                    value={commentContent}
                                    onChange={(e) => setCommentContent(e.target.value)}
                                />
                                <IconButton onClick={handleSubmitComment}>
                                    <SendIcon />
                                </IconButton>
                            </Box>
                        </Paper>
                    </Modal>
                )}
            </Box>
        </Container>
    );
};

export default Blog;
