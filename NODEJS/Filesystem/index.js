const fs = require("fs");

fs.readFile("./texto.txt", function(err, data){
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

fs.writeFile("./texto.txt", "linea uno", function (err) {
    if (err) {
        console.log(err)
    }
    console.log("Archivo creado");
});

console.log("Ultima línea de codigo");