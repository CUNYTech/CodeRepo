const mongoose = require('mongoose');
const config = require('../config/database');

// HTMLSearch Schema
const HTMLSearchSchema = mongoose.Schema({
    key: {
        type: String
    },
    definition: {
        type: String
    },
    attribute: {
        type: String
    },
    attDefinition: {
        type: String
    }
    },{collection:'keyAtt'});

const SearchHTML = module.exports = mongoose.model('Search', HTMLSearchSchema);

// JSSearch Schema
const JSSearchSchema = mongoose.Schema({
    function: {
        type: String
    },
    returnType: {
        type: String
    },
    parameter: {
        type: String
    },
    functionDef: {
        type: String
    }
    },{collection:'JsFunction'});

const SearchJS = module.exports = mongoose.model('SearchJS', JSSearchSchema);

// JSSearch Schema
const PostSearchSchema = mongoose.Schema({
    postID: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    
    link:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    
    date:{
    	type: Number
    }
    
    
    },{collection:'forum'});

const SearchPost = module.exports = mongoose.model('SearchPost', PostSearchSchema);

//search definition by name
module.exports.getDefByKey = function(key, callback) {
	const query = {key: key}
	SearchHTML.find(query, callback);
}

//search definition by function
module.exports.getDefByFunctionJs = function(key, callback) {
	const query = {function: key}
	SearchJS.find(query, callback);
}


//search Post by Post title
module.exports.getPostByTitle = function(key, callback) {
    const query = {title: { $regex: '.*' + key + '.*' } }
	SearchPost.find(query, callback);
}

//search Post by content
module.exports.getPostByContent = function(key, callback) {
    const query = {content:{ $regex: key }}
	SearchPost.find(query, callback);
}

//search Post by PostID
module.exports.getPostByID = function(key, callback) {
	const query = {postID: key}
	SearchPost.find(query, callback);
}

//search Post by author
module.exports.getPostByAuthor = function(key, callback) {
    const query = {author: key }
	SearchPost.find(query, callback);
}



//Find by Title
module.exports.getResourceByTitle = function(title, callback) {
 const query = {title:title}
 SearchPost.find(query, callback);

}

//Find content
module.exports.getResourceBycode = function(content, callback) {
 const query = {content:content}
 SearchPost.find(query, callback);
}


module.exports.addResource = function(newResource, callback,err) {
	if(err) throw err;
	var Resource = this;		  
	
//	// get the current date
//	 var currentDate = new Date();
//
//	  // change the updated_at field to current date
//	  Resource.updated_at = currentDate;
//
//	  // if created_at doesn't exist, add to that field
//	  if (!Resource.created_at){
//		  Resource.created_at = currentDate;
//	  
//	
//	  }     
	  newResource.save(callback);
}




