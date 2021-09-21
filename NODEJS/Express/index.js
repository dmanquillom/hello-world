//npm install colors
//npm install express

//npm init
//npm install 

const express = require("express");
const colors = require("colors");
const server = express ();

server.get("/", function (req, res){
    res.send("<h1>Hola Mundo con Express y Node</h1>");
    res.end();
});

server.listen(3000, function(){
    console.log("Server on port 3000".red);
});