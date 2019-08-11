const express = require('express')
const bodyParser = require(`body-parser`)
const app = express()
const path = require('path')
const api = require('./Router/routes')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)

let port = 8989
 app.listen(port, function() {
console.log(`Server up and running on port ${port}`)})