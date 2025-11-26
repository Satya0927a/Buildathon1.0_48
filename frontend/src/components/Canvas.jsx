import { useState } from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

const  Canvas = ()=> {
  const [canvasvisible,setcanvasvisible] = useState(true)
  function togglecanvasvisibliity(){

  }
	return (
		<div className="flex justify-center">
      <button onClick={togglecanvasvisibliity} className="absolute top-0 z-10 bg-white w-30 h-10 cursor-pointer"></button>
      <div className={`${canvasvisible? "flex":"hidden"} flex-col justify-center items-center fixed h-screen w-screen z-10 backdrop-blur-sm bg-black/30`}>
        <div className="h-[90%] w-[70%] top-15 absolute flex flex-col gap-5 items-center ">
          <button className="bg-red-200 cursor-pointer" onClick={togglecanvasvisibliity}>Close</button>
          <Tldraw className='rounded-2xl'/>
        </div>   
      </div>
    </div>
	)
}

export default Canvas