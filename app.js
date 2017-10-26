// Main server entry file
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


// Connect to database in the config file
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database );
});

mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err );
});

const app = express();

const users = require('./routes/users');

const searches = require('./routes/searches');

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