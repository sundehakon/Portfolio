import { Typography, Container, Box, Paper, Divider, CircularProgress, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null); 

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://portfolioapi-hysa.onrender.com/Blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs', error);
            }
        };

        fetchBlogs();
    }, []);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Container>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 5 }}>Blog</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 5 }}>
                {blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', mt: 2, marginBottom: 10 }}>
                            <Paper sx={{ 
                                width: { xs: 250, sm: 300, md: 350 }, 
                                borderRadius: 3, 
                                overflow: 'hidden', 
                                marginTop: { xs: 5, sm: 5, md: 8 },
                                position: 'relative',
                                transition: '0.3s',
                                boxShadow: 3 
                            }} elevation={2}>
        
                                <Box sx={{ 
                                    background: 'linear-gradient(133deg, rgba(49,92,138,1) 17%, rgba(91,162,240,1) 92%)', 
                                    height: 200,  
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 3 }}>
                                        <Typography sx={{ color: 'white' }} variant='h5'>{blog.title}</Typography>
                                        <Typography sx={{ color: 'white' }}>- {blog.author}</Typography>
                                    </Box>
                                </Box>
                                <Divider />
                                <Box sx={{ 
                                    display: '-webkit-box',
                                    WebkitLineClamp: expandedIndex === index ? 'none' : 5, 
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden', 
                                    margin: 3,
                                }}>
                                    <Typography>{blog.content}</Typography>
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
            </Box>
        </Container>
    );
};

export default Blog;
