const mongoose = require('mongoose');
const config = require('../config/database');



const ResourceSchema = mongoose.Schema({
	title: { type: String, required: true  },
	  author: { type: String},
	  tags: { type: String, required: true },
	  code: { type: String, required: true },
	  created_at: Date,
	  updated_at: Date
	});



const Resource = module.exports = mongoose.model('User', ResourceSchema);


