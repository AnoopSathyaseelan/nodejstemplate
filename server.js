let http = require("http");
const express= require("express")
const app=express()
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs= require("fs")
const path= require("path")
const moment=require("moment")
//Config Setups
const PORT=3000;
const Environment="DEV"

//Route Imports
const test=require('./main/mainroute')


//logger
app.use(bodyParser.json())

if(fs.existsSync(path.join(__dirname,`/logs`))){
    console.log(`Log are Created at ${path.join(__dirname,`/logs`)}`);
}else{
    fs.mkdir(path.join(__dirname,`/logs`),(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Logs Directory Created");
    })
}

const log = fs.createWriteStream(
    path.join(__dirname, "logs", `logs_${moment(Date.now()).format("DD_MM_YYYY")}.log`), { flags: "a" }
  );
  
  morganBody(app, {
    // .. other settings
    noColors: true,
    stream: log,
    logAllReqHeader:true,
    logIP:true,
  });


//Routes for all the different modules 
app.use("/test",test);

//server Port
app.listen(PORT,()=>{
    console.log("Current Enviroment "+Environment);
    console.log("Now listening to port "+PORT);
})