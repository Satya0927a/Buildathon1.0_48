import { useState } from "react"
import Canvas from "../components/Canvas"
import Editor from "../components/Editor"


const Apppage = ()=>{
  const [code,setcode] = useState(`export default function App(){return(<div className="bg-red-200">Hehe the editor is running finally</div>)}`)
  return(
    <div>
        <Canvas setcode={setcode}></Canvas>
        <Editor code={code}></Editor>
    </div>
  )
}

export default Apppage