const mongoose = require('mongoose');
const config = require('../config/database');

const ResourceSchema = mongoose.Schema({
	title: { type: String, required: true  },
	  author: { type: String},
	  tags: { type: String, required: true },
	  code: { type: String, required: true },
	  created_at: Date,
	  updated_at: Date,
	  meta: {
		    votes: Number,
		  }
	});



const Resource = module.exports = mongoose.model('User', ResourceSchema);


//Find by Title
module.exports.getResourceByTitle = function(title, callback) {
 const query = {title: title}
 User.findOne(title, callback);

}

//Find code
module.exports.getResourceBycode = function(code, callback) {
 const query = {code: code}
 User.findOne(query, callback);
}



ResourceSchema.pre('save', function(next) {

		  var recipe = this;
		  // get the current date
		  var currentDate = new Date();

		  // change the updated_at field to current date
		  Resource.updated_at = currentDate;

		  // if created_at doesn't exist, add to that field
		  if (!Resource.created_at){
			  Resource.created_at = currentDate;
		  }
	  });
