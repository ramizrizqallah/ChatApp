const db = require('../database/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const login = (req,res,next)=>{
    let email = req.body.email
    let password  =req.body.password

    db.User.findOne({email:email}  )
    .then(user => {
        if (user) {
            bcrypt.compare(password,user.password, function(err,result){
                if (err) {
                    res.json({
                        error:err
                    })
                }if(result) {
                    res.json({
                        message:'Login Successful',
                        token
                    })
                }else{
                    res.json({
                        message:'Password does not matched'
                    })
                }
            })
        } else {
            res.json({
                message:'No user found'
            })
        }
    })
}

module.exports = {
    login
   }