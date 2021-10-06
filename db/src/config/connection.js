const mysql = require('mysql');

const objectConnection = {
    "host": "127.0.0.1",
    "port": 3306,
    "user": "root",
    "password": "246824",
    "database": "GestionTI"
}

const myConn = mysql.createConnection(objectConnection);

myConn.connect((error) => {
    if(error){
        console.log("Ha ocurrido un error", error);
    } else {
        console.log("Base de datos conectada");
    }
})

module.exports = myConn;