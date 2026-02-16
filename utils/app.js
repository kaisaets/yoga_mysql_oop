const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();

const articleRouter = require("../routes/article");
const authorRouter = require("../routes/author");
const userRouter = require("../routes/user");

class App {
    constructor(port) {
        this.port = port
        this.app = express()
        this.initMiddleWare()
        this.initRoutes()
        this.start()
        this.bindMethods()
    }
    bindMethods() {
        this.initMiddleWare =this.initMiddleWare.bind(this)
        this.initRoutes = this.initRoutes.bind(this)
        this.start = this.start.bind(this)
    }

    initMiddleWare() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))

        this.app.use(session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60
            }
        }))
    }

    initRoutes() {
        this.app.use('/', articleRouter)
        this.app.use('/', authorRouter)
        this.app.use('/', userRouter)
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`)
        })
    }
} 

module.exports = App
