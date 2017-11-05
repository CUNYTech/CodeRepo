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

// CSSSearch Schema
const CSSSearchSchema = mongoose.Schema({
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

const SearchCSS = module.exports = mongoose.model('SearchCSS', CSSSearchSchema);

//Find definition by key
module.exports.getDefByKey = function(key, callback) {
	const query = {key: key}
	SearchHTML.find(query, callback)
}

module.exports.getDefByKeyCSS = function(key, callback) {
	const query = {key: key}
	SearchCSS.find(query, callback)
}