const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Search Schema
const SearchSchema = mongoose.Schema({
    key: {
        type: String,
    },
    definition: {
        type: String,
    },
    attribute: {
        type: String,
    },
    attDefinition: {
        type: String,
    }
});

const Search = module.exports = mongoose.model('Search', SearchSchema);

//Find definition by key
module.exports.getDefByKey = function(key, callback) {
	const query = {key: key}
	Search.find(query, callback)
}