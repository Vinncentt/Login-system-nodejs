var express = require("express");
var router = express.Router();

const loginInfos = {
    email: "user@email.com",
    password : "password"
};
//Login user route

router.post('/login', (req, res) => {
    if(req.body.email == loginInfos.email && req.body.password == loginInfos.password){
        req.session.user = req.body.email;
        res.end("Login Successful...!");
    }else{
        res.end("Incorrect email or password!!")
    }
});

module.exports = router;