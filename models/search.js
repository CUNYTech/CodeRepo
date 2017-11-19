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

//Find definition by key
module.exports.getDefByKey = function(key, callback) {
	const query = {key: key}
	SearchHTML.find(query, callback);
}

module.exports.getDefByFunctionJs = function(key, callback) {
	const query = {function: key}
	SearchJS.find(query, callback);
}