module.exports = {

    // If you need to use a local databse comment out the mlab line. If you want to use mlab comment out the localhost mongodb.

    // Mlab database
     //database: 'mongodb://admin1:admin1@ds161574.mlab.com:61574/coderef',

    // local database
    database: process.env.MONGO_URI, 
    secret: process.env.SECRET,





    
}
