
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
	 service: 'gmail',
	 auth: {
	        user: 'bogleoneil@gmail.com',
	        pass: 'Ilovefishes123'
	    }
	});