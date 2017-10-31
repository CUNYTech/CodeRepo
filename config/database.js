module.exports = {

    database: process.env.MONGO_URI || 'mongodb://localhost:27017/meanauth',
    secret: process.env.SECRET || 'yoursecret',
}
