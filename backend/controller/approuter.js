const approuter = require('express').Router()
const multer = require('multer')
const upload  = multer()
approuter.get('/test',(req,res)=>{
  res.send("the route is working ")
})
approuter.post('/generate',upload.single('file'),async(req,res)=>{
  const {detailinput} = req.body
  const base64 = req.file.buffer.toString('base64')

  console.log(detailinput,base64)
})

module.exports = approuter