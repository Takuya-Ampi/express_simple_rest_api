
import Routes from './api/routes/taskRoutes'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/Tododb")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

Routes(app) //appにRouteを設定する。

app.listen(port) // appを特定のportでlistenさせる。

console.log("todo list RESTful API server started on: " + port)
