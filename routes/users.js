const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {

  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    faceBook: req.body.faceBook,
    twitter: req.body.twitter,
    linkedin: req.body.linkedin,
    google: req.body.google,
    instagram: req.body.instagram
    
  });
  let errMsg = "";
  User.getUserByUsername(newUser.username, (err, user) => {
	    if(err) throw err;
	    if(user){
	      errMsg+="Username ";
	    }
  });
  User.getUserByEmail(newUser.email, (err, user) => {
	    if(err) throw err;
	    if(user){
	    	return res.json({success: false, msg:'User or email exist!'});
	    }
	    else
	    {
    	  User.addUser(newUser, (err, user) => {
    		    if(err){
    		    	return res.json({success: false, msg:'User or email exist!'});
    		    } else {
    		        return res.json({success: true, msg:'User registered'});
    		    }
    		  });
	    }
});

});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
    User.getUserByUsername(username, (err, user) => {
	    if(err) throw err;
	    if(!user){
	      return res.json({success: false, msg: 'User not found'});
	    }
  
     User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({ data: user }, config.secret, {
          expiresIn: 604800
         });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  
	
	res.json({user: req.user});
  
//  User.getUserByUsername(req.body.user, (err, User) => {  
//	    // Handle any possible database errors
//	    if (err) {
//	        //res.status(500).send(err);
//	    	res.json("error finding user");
//	    	re
//	    } else {
//	    	
//	    	User.faceBook =  req.body.faceBook
//	    	User.twitter = req.body.twitter
//	    	User.linkedin = req.body.linkedin
//	    	User.google = req.body.google
//	    	User.instagram = req.body.instagram
//	    
//	    	User.save((err, User) => {
//	            if (err) {
//	                //res.status(500).send(err)
//	            	res.json("cannot update");
//	            }
//	            //res.status(200).send(User);
//	            res.json("changed");
//	        });
//      
//      
//	    }
//  });
// 
});

//Forgot
router.get('/forgot',(req,res,next) => {
	
// res.json("password");
	
	const password1 = req.body.password1;
	const password2 = req.body.password2;
	
	
	if (password1 == password2){
		
		//res.json("sucess pasword matches");
		
		const email= req.body.email;
			
		User.getEmail(email, (err, User) => {
		    // console.log(user)
			if(err) {
			
			res.status(500).send(err);	
				
			} else  {
			
			User.password = password1;
			
				User.save((err, User) => {
	            if (err) {
	            	res.json(`err: ${err}`);
	            
	            }else{
	            	
	            res.json("sucess pasword changed");

				}
			});
		
		}
	
});
			}  else {
				
				res.json("false");
			}
	
	
});

//test route to check if code works
router.post('/test',(req, res, next) => {
 
  
  User.getUserByUsername(req.body.user, (err, User) => {  
	    // Handle any possible database errors
	    if (err) {
	        //res.status(500).send(err);
	    	res.json("error finding user");
	    	re
	    } else {
	    	
	    	User.faceBook =  req.body.faceBook
	    	User.twitter = req.body.twitter
	    	User.linkedin = req.body.linkedin
	    	User.google = req.body.google
	    	User.instagram = req.body.instagram
	    
	    	User.save((err, User) => {
	            if (err) {
	                //res.status(500).send(err)
	            	res.json("cannot update");
	            }
	            //res.status(200).send(User);
	            res.json("changed");
	        });
      
      
	    }
  });
 
});





module.exports = router;