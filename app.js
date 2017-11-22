// Main server entry file
const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;


// Connect to Mlab Db through dotenv
mongoose.connect(config.database, {
    useMongoClient: true
});


//// On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database );
});

mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err );
});

const app = express();

const users = require('./routes/users');

const searches = require('./routes/searches');

const resources = require('./routes/resourcesSearch');



// variable for port
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/searches',searches);

app.use('/postresources',resources);


// Index Route
app.get('/', (req, res) =>{
    res.send('Invalid Endpoint');
});

app.get('**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
});
