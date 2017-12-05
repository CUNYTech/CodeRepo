const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Resource = require('../models/search');
const Resource2 = require('../models/resource');


//post resource
router.post('/postresource', (req, res, next) => {
	//test
	console.log("This is the route");
	let newResource = new Resource ({
		title: req.body.title,
		author: req.body.author,
		content: req.body.content,
		category: req.body.category,
		link: req.body.link,
		date: req.body.date
	    
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
		    
		    if(resource!=""){
		    
		    	return res.json({success: false, msg:'resource exist!'});
		    
		    } else {
		    
		    	Resource.addResource(newResource, (err, resource) => {
	    		    if(err){
	    		    	return res.json({success: false, msg:'resource exist!'});
	    		    } else {
	    		        return res.json({success: true, msg:'success resource'});
	    		    }
	    		  });
		    }
		});
	
});

// Search post
router.post('/search', (req, res, next) => {

	
	let postID = req.body.postID;
    let title = req.body.title;
    let link = req.body.link;
	let author = req.body.author;
	let content = req.body.content;
	let category = req.body.category;
    let date = req.body.date;

	let query;
	var datetime = Date.now();
	query = {title:{ $regex: '.*' + title + '.*' },
				link:{ $regex: '.*' + link + '.*' },
				author:{ $regex: '.*' + author + '.*' },
				content:{ $regex: '.*' + content + '.*' },
				category:{ $regex: '.*' + category + '.*' },
				date:{ $gt:date, $lt:datetime } };
    

	Resource2.getResourceByFilter(query, (err, search) => {
		if(err) throw err;
		if(search == ""){				
				res.json({success: false, msg:'no result found!'});
		}
		else
		{
			res.json(search);
		}
	});
});




module.exports = router;
