const approuter = require('express').Router()
const multer = require('multer')
const Gemini = require('../services/gemini')
const upload  = multer()
approuter.get('/test',(req,res)=>{
  res.send("the route is working ")
})
approuter.post('/generate',upload.single('file'),async(req,res,next)=>{
  try{
    const {detailinput} = req.body
    const base64 = req.file.buffer.toString('base64')
    const prompt = process.env.PROMPT
    const code = await Gemini(prompt,base64)
    
    res.status(201).send({status:"success",code:code,message:"the code is successfully generated"})
  }
  catch(error){
    next(error)
  }
})

module.exports = approuter