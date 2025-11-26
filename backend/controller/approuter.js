const approuter = require('express').Router()
const multer = require('multer')
const {Gemini_generate,Gemini_update} = require('../services/gemini')
const upload  = multer()
approuter.get('/test',(req,res)=>{
  res.send("the route is working ")
})
approuter.post('/generate',upload.single('file'),async(req,res,next)=>{
  try{
    const {detailinput} = req.body
    const base64 = req.file.buffer.toString('base64')
    const prompt = process.env.PROMPT
    const code = await Gemini_generate(prompt,base64)
    
    res.status(201).send({status:"success",code:code,message:"the code is successfully generated"})
  }
  catch(error){
    next(error)
  }
})

approuter.post('/updatecode',async(req,res,next)=>{
  const {previous_code,user_prompt} = req.body
  const prompt = `${previous_code} ${process.env.REGENERATE_PROMPT} ${user_prompt}`
  const new_code = await Gemini_update(prompt)
  res.status(201).send({status:"success", new_code :new_code, message:"the code is updated successfully"})
})

module.exports = approuter