var express = require('express');
var router = express.Router();
var mysql=require("mysql");
let id=0;
// var connection = mysql.createConnection({
//   host     : 'remotemysql.com',
//   port:3306,
//   user : 'TUKN9qkrxO',
//   password : 'b6JQaYWxLn',
//   database : 'TUKN9qkrxO'
// });

/* GET home page. */

session = require('express-session');
app = express();

app.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: true
}));
router.get('/', function(req, res, next) {
  
  res.render('register');
  //res.render("error");
});

router.get("/regC",function(req,res,next){
  res.render('forms/register',{true:null});
});

router.post("/customer/reg",function(req,res,next){

  console.log(req.body)
  let {fname,lname,email,age,ph,collage,address,pass,cpass,skill,antiskill}=req.body;
  
  if(pass==cpass){
   id++;
    
   req.session.user = "amy"; 
   res.render("booking");

  }else{
    res.render('forms/register',{true:"false"});
  }

})

function userAuth(userid){

  if(userid==id){

    return true;
  }else{
    return false
  }

}

router.get("writer/register",function(req,res,next){

});

router.post("/writer/reg",function(req,res,nexnt){

});

module.exports = router;
