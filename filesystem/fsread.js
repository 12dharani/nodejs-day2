const fs = require("fs");

console.log("hello -process1")
    fs.readFile("./files/info.txt", "utf-8",(error,data)=>{
        if(error){
            console.log("file not found - process3")
        }else{
            console.log(data);
        }
    });

console.log("hello -process2")