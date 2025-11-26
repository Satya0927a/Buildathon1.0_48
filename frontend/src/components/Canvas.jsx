import { useState } from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

const  Canvas = ({setcode})=> {
  const [Detailinput,setdetailinput] = useState(null)
  const [canvasvisible,setcanvasvisible] = useState(true)
  function togglecanvasvisibliity(){
    setcanvasvisible(!canvasvisible)
  }
  function handleupload(){
    
  }
	return (
		<div className="flex justify-center">
      <button onClick={togglecanvasvisibliity} className="absolute top-0 z-10 bg-gray-500 w-30 h-10 cursor-pointer"></button>
      <div className={`${canvasvisible? "flex":"hidden"} flex-col justify-center items-center fixed h-screen w-screen z-10 backdrop-blur-sm bg-black/30`}>
        <div className="h-[90%] w-[70%] top-15 absolute flex flex-col gap-5 items-center ">
          <button className="bg-red-200 cursor-pointer" onClick={togglecanvasvisibliity}>Close</button>
          <Tldraw className='rounded-2xl'/>
           <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <input onChange={(target)=>{setdetailinput(target.value)}} value={Detailinput? Detailinput : ""} className="p-2 h-12 bg-gray-100 border-2 rounded-xl" type="text" placeholder="Describe your design(optional)"/> 
              <button type="" className="h-12 w-50 bg-purple-500 rounded-xl cursor-pointer" onClick={handleupload}>Generate</button>
            </div>
          </div>
        </div>   
      </div>
    </div>
	)
}

export default Canvas