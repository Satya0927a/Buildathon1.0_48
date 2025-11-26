const app = require('./app')

const port = process.env.PORT || 3002
app.listen(port,()=>{
  console.log(`The server is live on port ${port}`);
})