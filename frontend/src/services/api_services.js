import axios from "axios";

async function Generate(detailinput,blob) {
  const formdata = new FormData()
  formdata.append('detailinput',detailinput)
  formdata.append('file',blob)

  const result = await axios.post('/api/app/generate',formdata)
  return result.data
}

async function Update(previous_code,user_prompt) {
  const result = await axios.post('/api/app/updatecode',{previous_code,user_prompt})
  return result.data
}

export{Generate,Update}