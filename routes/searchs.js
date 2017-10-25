const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Search = require('../models/search');

// Search
router.post('/search', (req, res, next) => {
  let newSearch = new Search({
    key: req.body.search
  });
  
  Search.getDefByKey(newSearch, (err, search) => {
	  console.log(search);
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
	    res.json({
	    	search:{
	    		key:search[0].key,
	    		definition:search[0].definition,
	    		attribute:search[0].attribute,
	    		attDefinition: search[0].attDefinition
	    	}
	    });
  });
});

module.exports = router;