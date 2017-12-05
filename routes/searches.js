const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Search = require('../models/search');

// Search keyword
router.post('/search', (req, res, next) => {
	const type = req.body.type;
	if(type == "HTML" || type == undefined)
	{
		const key = req.body.search;
		const keys = key.split(",");
		let count = 0;
		let result = [];
		for (let index = 0; index < keys.length; index++) 
		{		
			Search.getDefByKey(keys[index], (err, search) => {
				if(err) throw err;
				count++;
				if(search == ""){
					if(count == 1)					
						res.json({success: false, msg:'Key does not exist!'});
				}
				else
				{
					for(att in search)
					{
						if(att!=0)
						{
							search[0].attribute += "---" + search[att].attribute;
							search[0].attDefinition += "---" + search[att].attDefinition;
						}
					}
					result.push({key: search[0].key,definition: search[0].definition,attribute: search[0].attribute,attDefinition: search[0].attDefinition});
					if(count == keys.length)
					{
						res.json(result);
					}
				}
			});
		}
	}
	else if(type == "JS")
	{
		const fun = req.body.search;
		const funs = fun.split(",");
		let count = 0;
		let result = [];
		for (let index = 0; index < funs.length; index++) 
		{		
			Search.getDefByFunctionJs(funs[index], (err, search) => {
				if(err) throw err;
				count++;
				console.log(funs[index]);
				console.log(search);
				if(search == ""){
					if(count == 1)
						res.json({success: false, msg:'Function does not exist!'});
				}
				else
				{
					result.push({function: search[0].function,returnType: search[0].returnType, parameter: search[0].parameter, definition: search[0].functionDef});
					if(count == funs.length)
					{
						res.json(result);
					}
				}
			});
		}
	}
	
});


// Search post
router.post('/searchPost', (req, res, next) => {
	const target = req.body.target;
	if(target == "title" || target == undefined)
	{
		const key = req.body.search;	
		Search.getPostByTitle(key, (err, search) => {
			if(err) throw err;
			if(search == ""){				
					res.json({success: false, msg:'no result found!'});
			}
			else
			{
				res.json(search);
			}
		});
	}
	else if(target == "ID")
	{
		const key = req.body.search;	
		Search.getPostByID(key, (err, search) => {
			if(err) throw err;
			if(search == ""){				
					res.json({success: false, msg:'no result found!'});
			}
			else
			{
				res.json(search);
			}
		});
	}
	else if(target == "author")
	{
		const key = req.body.search;	
		Search.getPostByAuthor(key, (err, search) => {
			if(err) throw err;
			if(search == ""){				
					res.json({success: false, msg:'no result found!'});
			}
			else
			{
				res.json(search);
			}
		});
	}
	else if(target == "content")
	{
		const key = req.body.search.split(" ");;
		let keys = '\.*';
		for(k in key)
		{
			console.log(key[k]);
			keys += (key[k] + '\.*');
		}
		Search.getPostByContent(keys, (err, search) => {
			if(err) throw err;
			if(search == ""){				
					res.json({success: false, msg:'no result found!'});
			}
			else
			{
				res.json(search);
			}
		});
	}
});

module.exports = router;