const express = require('express');
const cors = require('cors');
const app = express()

//middlewares
app.use(cors());
app.use(express.json());