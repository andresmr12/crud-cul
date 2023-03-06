const express=require('express');
const app=express();
const path=require('path')
const morgan=require('morgan');
const exp = require('constants');

//setting 
app.set('port',8000);
app.set('views',path.join(__dirname,'views'));
app.set('views',path.join(__dirname,'views'));
// console.log(app.set('views',path.join(__dirname,'views')))
app.set('view engine', 'ejs');

//Meddlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//router
app.use(require('./routes/index'))

//Static
app.use(express.static(path.join(__dirname,'public')));
// console.log(path.join(__dirname,'public'));


//error 404
app.use((req,res,next)=>{
    res.status(404).send("404 not found");
})

module.exports=app;