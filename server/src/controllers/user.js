//import model
const User = require('../models/user')

//import bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerNewUser = async(req,res)=>{
    try {
        //generate hash password
        const hashPass = await bcrypt.hash(req.body.password, saltRounds )
        req.body.password = hashPass

        //create new user
        await User.create(req.body)
        res.json({
            msg: "user registered successfully"
        })
    }catch(err){
        console.log(err)
    }
}

const loginUser = async(req,res)=>{
    try {
        //find user based on phone number
        const userDetails = await User.findOne({phoneNumber: req.body.phoneNumber})
        
        //check if user exists or not
        if(userDetails){
            //user exists

            const match = await bcrypt.compare(req.body.password, userDetails.password);
            //check if password matches or not
            if(match){
                res.json({
                    msg: 'Login success'
                })
            }else{
                res.json({
                    msg: 'Incorrect password'
                })
            }
        }else{
            //user doesn't exist
            res.status(401).json({
                msg: "invalid phonenumber"
            })
        }
    }catch(err){
        console.log(err)
    }
}

//export modules
module.exports= {registerNewUser, loginUser}