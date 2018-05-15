const express =require('express');
const router= express.Router();
const passport=require('passport');
const jwt= require('jsonwebtoken');

const config = require('../config/database');
const User= require('../models/user');

//register route
router.post('/register', (req,res, next)=>{
    //user object to get details of user
        let newUser= new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password:req.body.password
        });    
        //put model 
        User.addUser(newUser,(err, user)=>{
            if(err){
                res.json({success:false, msg:'Failed to register user'});
            }
            else{
            res.json({success:true, msg: 'User registered'});
            }
        });
});
//authenticate route
router.post('/authenticate',(req,res, next)=>{
    //get the username passed in the body
    const username= req.body.username; 
    const password = req.body.password;

    //check user in db
    User.getUserbyUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user){
        return res.json({success:false, msg:'User not found'});
    }
    //compare the given passwrod and saved hashed password
    User.comparePassword(password, user.password,(err, isMatch)=>{
        if(err) throw err;
        if(isMatch){
            //create the token
            const token= jwt.sign({data:user}, config.secret, { //passing payload, secret in sign
                expiresIn: 604800 //1 week in seconds
            });
            //respond to web
            res.json({
                success:true, 
                token:'JWT '+token,
                user:{
                    id: user._id,
                    name: user.name,
                    username: user.username,
                    email: user.email
                }
            });
        }
        else{
            res.json({success: false, msg:'Wrong password'});
        }
    });
    });
});

//profile route
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res, next)=>{ //protection of url with second paramater i.e. the user cannot access if he is not logged in
    res.json({user:req.user});
});

module.exports= router;