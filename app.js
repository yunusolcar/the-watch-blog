const express = require('express')
const pageRoute = require('./routes/pageRoute')
const mysql = require('mysql2')
const config = require('./config')
const app = express()

//Db Connection
const connection = mysql.createConnection(
     config.db
)
connection.connect((err) => {
     if (err) {
          return console.log(err);
     }
     connection.query(
          'SELECT * FROM blogdb.blog', (err, results) => {
               console.log(results)
          })
     console.log("Db connection completed succesfully")
})

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({
     extended: true
}))
app.use(express.json())

//Template Engine
app.set('view engine', 'ejs')

//Routes
app.use('/', pageRoute)

//Port
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))