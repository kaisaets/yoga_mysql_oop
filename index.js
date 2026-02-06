const express = require('express')
const bodyParser = require('body-parser')
const conn = require('./utils/db.js')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const articleController = require('./controllers/article.js')

const articleRoutes = require('./routes/article')
app.use('/', articleRoutes)

app.listen(3025, () => {
    console.log('Example app listening on port 3025')
})