const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Resource = require('../models/resourceModel');



//post resource
router.post('/postresource', (req, res, next) => {
	//test
	console.log("This is the route");
	let newResource = new Resource ({
		title: req.body.title,
		author: req.body.author,
		code: req.body.code
	    
	  });
	
	console.log(newResource);
	
	
	let errMsg = "";
	Resource.getResourceByTitle(newResource.title, (err, resource) => {
	    if(err) throw err;
	    if(resource){
	    	
	    	errMsg+="title";
	    }
	});
	Resource.getResourceBycode(newResource.code, (err, resource) => {
		    if(err) throw err;
		    
		    if(!resource){
		    
		    	return res.json({success: false, msg:'resource exist!'});
		    
		    } else {
		    
		    	Resource.addResource(newResource, (err, resource) => {
	    		    if(err){
	    		    	return res.json({success: false, msg:'User or email exist!'});
	    		    } else {
	    		        return res.json({success: true, msg:'User registered'});
	    		    }
	    		  });
		    }
		});
	
});




router.get('displayresource', (req, res, next) => {
	
	console.log(resource);
	
});


module.exports = router;