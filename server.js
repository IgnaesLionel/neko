require('dotenv').config({path: './config/.env'});
require('./config/db');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


const userRoutes = require('./routes/user.routes');

/* const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
 */

const corsOptions = {   origin: "*",   methods:
"GET,HEAD,PUT,PATCH,POST,DELETE",   allowedHeaders:
    "Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Origin,Cache-Control,Content-Type,X-Token,X-Refresh-Token",   credentials: true,   preflightContinue: false,  
optionsSuccessStatus: 204 };

//origin: process.env.CLIENT_URL,
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// routes
app.use('/api/user', userRoutes);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

