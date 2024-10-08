import { Typography, Container, Box, Paper, Divider, CircularProgress, Button, IconButton, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [comments, setComments] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const openCommentModal = () => setOpen(true);
    const closeCommentModal = () => setOpen(false);

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
                                        <IconButton onClick={openCommentModal}>
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
                    <CircularProgress />
                )}
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <Modal 
                            open={open} 
                            onClose={closeCommentModal}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: 300, width: 300, borderRadius: 3 }}>
                                <Typography variant='h5'>Comments</Typography>
                                <Box key={index}>
                                    <Typography>{comment.content}</Typography>
                                </Box>
                            </Paper>
                        </Modal>
                    ))
                    ) : (
                        <CircularProgress />
                    )}
            </Box>
        </Container>
    );
};

export default Blog;
