const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path .json(__dirname, "public")))
app.use(cors());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('User Service DB Connected'))
.catch(err => console.log(err));
