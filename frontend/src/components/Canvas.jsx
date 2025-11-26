import { useRef, useState } from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import { Generate, Update } from '../services/api_services'

const  Canvas = ({setcode,code})=> {
  const [Detailinput,setdetailinput] = useState(null)
  
  const [canvasvisible,setcanvasvisible] = useState(true)
  const Editor_ref = useRef(null)

  function togglecanvasvisibliity(){
    setcanvasvisible(!canvasvisible)
  }
  function handlemount(editor) {
    Editor_ref.current = editor
  }

  async function handleupload() {
    const editor = Editor_ref.current

    if (!editor) {
      return
    }

    const shapeIds = editor.getCurrentPageShapeIds()
    if (shapeIds.size === 0) return alert('No shapes on the canvas')
    const { blob } = await editor.toImage([...shapeIds], { format: 'png', background: true })
    const result = await Generate(Detailinput,blob)
    setcode(result.code)
  }
	return (
		<div className="flex justify-center">
      <button onClick={togglecanvasvisibliity} className="absolute top-0 z-10 bg-gray-500 w-30 h-10 cursor-pointer"></button>
      {!canvasvisible &&  <Regenerate code={code} setcode={setcode}></Regenerate>}
     
      <div className={`${canvasvisible? "flex":"hidden"} flex-col justify-center items-center fixed h-screen w-screen z-10 backdrop-blur-sm bg-black/30`}>
        <div className="h-[90%] w-[70%] top-15 absolute flex flex-col gap-5 items-center ">
          <button className="bg-red-200 cursor-pointer" onClick={togglecanvasvisibliity}>Close</button>
          <Tldraw className='rounded-2xl'
            persistenceKey="example"
            onMount={handlemount}
            overrides={{
              tools: (_editor, tools) => {
                delete tools.hand
                delete tools.media
                delete tools.note
                delete tools.laser
                delete tools.highlight
                return tools
              }
            }}
          />
           <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <input onChange={(e)=>{setdetailinput(e.target.value)}}  value={Detailinput? Detailinput : ""} className="p-2 h-12 bg-gray-100 border-2 rounded-xl" type="text" placeholder="Describe your design(optional)"/> 
              <button type="" className="h-12 w-50 bg-purple-500 rounded-xl cursor-pointer" onClick={handleupload}>Generate</button>
            </div>
          </div>
        </div>   
      </div>
    </div>
	)
}

const Regenerate = ({code,setcode})=>{
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  async function handleGenerate() {
    setIsGenerating(true)
    const data = await Update(code,prompt)
    setcode(data.new_code)
    setIsGenerating(false)
    setPrompt('')
  }
  return(

        <div className="w-150 flex flex-col sm:flex-row items-center gap-4 absolute z-20 bottom-2 right-160 shadow-2xl ">
          <input
            type="text"
            className="flex-1 w-full p-3 sm:p-4 text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400 font-medium text-base"
            placeholder="Enter your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isGenerating}
          />
          <button
            className="w-full sm:w-auto px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
          >
            {isGenerating ? (
              <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Generate'
            )}
          </button>
        </div>
  )
}

export default Canvas