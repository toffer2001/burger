var connection = require("../config/orm.js");
var mysql = require("mysql");


var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
        // host: "y06qcehxdtkegbeb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        // user: "jb6viooadhls615k",
        // password: "q7sr99iwswbvzowj",
        // database: "burgers_db"
}else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Goldgold3056",
        database: "burgers_db"
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
