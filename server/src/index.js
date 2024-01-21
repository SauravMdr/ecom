const express = require('express')
const app = express()

//connection import
const connection = require('./db/connection')

//import cors
const cors = require('cors')
app.use(cors())

require('dotenv').config()

//body parser
app.use(express.json())

//run connection
connection()

//import route
const userRoute = require('./routes/user')
app.use(userRoute)

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})