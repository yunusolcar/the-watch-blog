const mysql = require('mysql2')
const config = require('../config')

const connection = mysql.createConnection(config.db)

connection.connect((err) => {
     if (err) {
          return console.log(err);
     }
     console.log("Db connection completed succesfully")
})

/*
connection.query("SELECT * FROM blog", (err, result)=>{
    title = result[0].title
})
*/


module.exports = connection