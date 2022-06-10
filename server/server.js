const express = require('express');
// const axios = require('axios').default;
const { auth } = require('express-openid-connect');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
const app = express();


const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUERBASEURL
  };

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.use(auth(config));

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    console.log(req.oidc.isAuthenticated());
    // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

app.use(express.static(REACT_BUILD_DIR));



// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});