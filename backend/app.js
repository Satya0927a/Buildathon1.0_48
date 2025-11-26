const express = require('express')
const approuter = require('./controller/approuter')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
  res.send("hello world")
})
app.use('/api/app',approuter)

module.exports = app
