const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Search = require('../models/search');



//Register
router.post('/postresource', (req, res, next) => {
	let newUser = new Resource({
		title: req.body.title,
		author: req.body.author,
		code: req.body.code,
	    password: req.body.password
	    
	    
	  });
	
	
	
});
