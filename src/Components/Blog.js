import { Typography, Container, Box } from "@mui/material"

const Blog = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 5 }}>Blog</Typography>
                <Typography>Coming soon...</Typography>
            </Box>
        </Container>
    );
};

export default Blog;