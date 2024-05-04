require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json()); 

mongoose.connect(process.env.MONGO_URI, {});