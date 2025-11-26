import { Sandpack } from "@codesandbox/sandpack-react"
const Editor = ()=>{
  return(
    <div>
      <Sandpack
        theme={'dark'}
        template="react"
        options={{
          showInlineErrors:true,
          editorHeight:"100vh",
          showLineNumbers:true
        }}
        files={{
          "/index.js":``,
          "/App.js":``
        }}
        
      ></Sandpack>
    </div>
  )
}

export default Editor