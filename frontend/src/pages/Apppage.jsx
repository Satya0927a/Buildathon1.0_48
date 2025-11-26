import { useState } from "react"
import Canvas from "../components/Canvas"
import Editor from "../components/Editor"


const Apppage = ()=>{
  const [code,setcode] = useState(`
const Greet = ()=>{
return(
  <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-4xl font-bold">Hello User Welcome to Morphix</h1>
    <p>Start turning your ideas into reality</p>
  </div>
)
}
export default Greet`)
  return(
    <div>
        <Canvas code={code} setcode={setcode}></Canvas>
        <Editor code={code}></Editor>
    </div>
  )
}

export default Apppage