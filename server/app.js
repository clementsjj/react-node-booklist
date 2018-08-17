const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const users = require('./routes/users')
const books = require('./routes/books')
const cors = require('cors')
const app = express()


mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser:true})
        .then(() => console.log('Mongodb Connected!'))
        .catch((err)=>console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())


app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
})

app.use('/api/v1/users', users)
app.use('/api/books', books);
module.exports = app
