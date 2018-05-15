
const mongoose= require('mongoose');
const bcrypt= require('bcryptjs');
const config = require('../config/database');

//user schema
const userSchema= mongoose.Schema({
    name: {
        type:String
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

//defining of model with userschema
const User= module.exports= mongoose.model('User',userSchema);

//export the function getuserbyid to call it from any file
module.exports.getUserbyId= function(id,callback){
    User.findById(id,callback);
}

//export function getuserbyusername
module.exports.getUserbyUsername= function(username,callback){
    const query={username: username}
    User.findOne(query,callback);
}

//adduser function and hash password
module.exports.addUser= function(newUser, callback){
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(newUser.password, salt, (err,hash)=>
        {
            if(err) throw err;
            newUser.password=hash; //hash the password in new user
            newUser.save(callback);
        });
    });
}
//compares the password returned by user and that in db
module.exports.comparePassword= function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null, isMatch);
    });
}