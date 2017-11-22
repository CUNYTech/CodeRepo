const express = require('express');
const router = express.Router();
const config = require('../config/database');
const resource = require('../models/resourceModel');



//Register
router.post('/postresource', (req, res, next) => {
	let newUser = new Resource ({
		title: req.body.title,
		author: req.body.author,
		code: req.body.code
	    
	    
	    
	  });
	
	
	
});


module.exports = router;