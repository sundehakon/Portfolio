require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const ManagementClient = require('auth0').ManagementClient;
app.use(cors());
app.use(bodyParser.json()); 

mongoose.connect(process.env.MONGO_URI, {});
const db = mongoose.connection;

const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    date: String,
}, { collection: 'Blogs' });

const commentSchema = new mongoose.Schema({
    postId: String,
    userId: String,
    userPicture: String,
    userName: String,
    content: String,
    date: String,
}, { collection: 'Comments' });

const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);

app.get('/api/Blogs', async (req, res) => {
    try {
        const blogs = await Post.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

var request = require("request");

var accessToken;

var options = { method: 'POST',
  url: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,
  headers: { 'content-type': 'application/json' },
  body: `{"client_id":"${process.env.REACT_APP_AUTH0_M2M_CLIENT_ID}","client_secret":"${process.env.REACT_APP_AUTH0_M2M_CLIENT_SECRET}","audience":"${process.env.REACT_APP_AUTH0_AUDIENCE}","grant_type":"client_credentials"}` };

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    const responseBody = JSON.parse(body);
    accessToken = responseBody.access_token;

    const management = new ManagementClient({
        token: accessToken,
        domain: process.env.REACT_APP_AUTH0_DOMAIN
    });
    
    app.get('/api/userProfile/:userId', async (req, res) => {
        try {
            const user = await management.getUser({ id: req.params.userId });
            res.status(200).json(user.picture);
        } catch (error) {
            console.error('Error fetching user profile:', error);
            res.status(500).json({ error: 'Internal server error'});
        }
    })
    
    app.get('/api/allUsers', async (req, res) => {
        try {
          const users = await management.getUsers({ fields: 'email,name,picture', include_fields: true });
          users.forEach(user => {
            console.log(user.email);
          });
          res.status(200).json(users);
        } catch (error) {
          console.error('Error fetching users:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
});

app.get('/api/Comments', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/Comments', async (req, res) => {
    const { postId, userId, userPicture, userName, content, date } = req.body;

    const comment = new Comment({
        postId,
        userId,
        userName,
        userPicture,
        content,
        date,
    });

    try {
        const savedComment = await comment.save();
        res.status(200).json(savedComment);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

db.once('open', () => {
    console.log('MongoDB connected');
});

const PORT = 9999;
app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
});