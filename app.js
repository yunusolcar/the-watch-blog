const express = require('express')
const pageRoute = require('./routes/pageRoute')

const app = express()

//Middleware
app.use(express.static("public"));

//Template Engine
app.set('view engine', 'ejs')

//Routes
app.use('/', pageRoute)

//Port
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))