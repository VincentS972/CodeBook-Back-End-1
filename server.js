// Modules and Globals
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

//Express Settings

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Controllers & Routes

app.use('/profile', require('./controllers/profile'))
app.use('/forum', require('./controllers/forum'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)