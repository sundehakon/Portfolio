require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json()); 

mongoose.connect(process.env.MONGO_URI, {});

const postSchema = new mongoose.Schema({
    userId: String,
    title: String,
    content: String,
    date: Date,
}, { collection: 'Blog' });

const Post = mongoose.model('Post', postSchema);

app.get('/api/Blog', async (req, res) => {
    try {
        const blog = await Post.find();
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

const PORT = 9999;
app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
})