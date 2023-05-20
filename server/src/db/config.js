const mysql = require('mysql2');


const conn = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "node"
    });

conn.connect(function (err) {
    if (err) {
        console.log("Ocorre um problema na conexao ", err);
    } else {
        console.log("Conexao bem sucedida");
    }
});

module.exports = conn;