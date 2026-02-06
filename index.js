const express = require('express')
const bodyParser = require('body-parser')
const conn = require('./utils/db.js')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const articleRoutes = require('./routes/article')
app.use('/', articleRoutes)

const authorRoutes = require('./routes/author')
app.use('/', authorRoutes)

app.listen(3025, () => {
    console.log('Example app listening on port 3025')
})