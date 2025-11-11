const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express()

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('/', cors());


module.exports = app;