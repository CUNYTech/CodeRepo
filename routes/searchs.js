const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Search
router.post('/search', (req, res, next) => {
  let newSearch = new Search({
    key: req.body.key,
  });
  Search.getDefByKey(newSearch.key, (err, search) => {
	    if(err) throw err;
	    if(!search){
	    	return res.json({success: false, msg:'Key does not exist!'});
	    }
	    for(att in search)
	    {
	    	if(att!=0)
	    	{
	    		search[0].attribute += "---" + search[att].attribute;
	    		search[0].attDefinition += "---" + search[att].attDefinition;
	    	}
	    }
	    
  });

});