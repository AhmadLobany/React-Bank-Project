const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})



const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bank', { useNewUrlParser: true ,useUnifiedTopology: true})
// app.use(express.static(path.join(__dirname, 'node_modules')))
// app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)


const port = 4000
app.listen(port , function () {
    console.log(`Running on port ${port}`)
})