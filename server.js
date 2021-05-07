require('dotenv').config({ path: './config/.env' });
require('./config/db');

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const fileRoutes = require("./routes/file.routes");
const { checkUser, requireAuth } = require('./middleware/auth.middleware');

global.__basedir = __dirname;

console.log(`ip du client ${process.env.CLIENT_URL}`)
console.log(`ip du serveur ${process.env.SERVER_URL}`)

var allowedDomains = ['http://neko-association.fr', 'http://15.236.97.173:3000', 'http://localhost:3000', 'neko-association.fr'];

app.use(cors({
  origin: function (origin, callback) {
    // bypass the requests with no origin (like curl requests, mobile apps, etc )
    if (!origin) return callback(null, true);
 
    if (allowedDomains.indexOf(origin) === -1) {
      var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false

}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});

// routes
app.use('/api/user', userRoutes);
app.use('/', fileRoutes);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  console.log("production")
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


console.log(__dirname)
app.listen(port, () => console.log(`Listening on port ${port}`));
