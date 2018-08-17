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
app.use(cors())
app.use('/api/v1/users', users)
app.use('/api/books', books);
module.exports = app
