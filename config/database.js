module.exports = {
    database: process.env.DB_MLAB || process.env.DB_LOCAL_DEV,
    secret: process.env.DB_SECRET,
}