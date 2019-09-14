var express = require('express');
var router = express.Router();
var mysql=require("mysql");
let id=0;
 var connection = mysql.createConnection({
   host     : 'remotemysql.com',
   port:3306,
   user : 'ulwRY5JFql',
   password : 'LE2ZB0LGea',
   database : 'ulwRY5JFql'
 });

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
router.get("/booking:id",function(res,req,next){



});


router.get("/regC",function(req,res,next){
  res.render('forms/register',{true:null});
});

router.post("/customer/reg",function(req,res,next){

  console.log(req.body)
  let {fname,lname,email,age,ph,gender,collage,add,cur,pass,cpass,skill,others}=req.body;
  
  
  if(pass==cpass){
   

   id++;
  
   connection.query("INSERT INTO `customers` (`id`, `name`, `email`, `age`, `phone`, `address`, `current`, `college`, `skills`, `timestamp`, `antiskill`) VALUES ("+id+", '"+fname+"', '"+email+"', '"+age+"', '"+ ph +"', '"+add+"','"+cur+"', '"+ collage +"', '"+skill+"', CURRENT_TIMESTAMP, '"+others+"');", function (err, results, fields) {
   console.log(err);
   res.render("booking");
  
  });



  }
});




router.get("writer/register",function(req,res,next){

});

router.post("/writer/reg",function(req,res,nexnt){

});

module.exports = router;
