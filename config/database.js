module.exports = {

    database: process.env.DB_LOCAL_DEV || process.env.DB_MLAB,
    secret: process.env.DB_SECRET,
}

