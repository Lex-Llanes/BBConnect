const express = require('express');
// const axios = require('axios').default;
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
const app = express();
app.use(express.static(REACT_BUILD_DIR));


const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());


//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});


// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});