import { Sandpack } from "@codesandbox/sandpack-react"
const Editor = ({code})=>{
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
        customSetup={{
        dependencies: {
          "react": "^18.2.0",
          "react-dom": "^18.2.0",
          "@twind/core": "^1.1.3",
          "@twind/preset-tailwind": "^1.1.4",
          "react-rnd": "10.4.13",
        }
        }}
        files={{
          "/index.js": `
            import React from "react";
            import { createRoot } from "react-dom/client";
            import { install } from '@twind/core';
            import presetTailwind from '@twind/preset-tailwind';
            import { Rnd } from "react-rnd";
            import App from "./App";

            install({
              presets: [presetTailwind()],
            });

            const root = createRoot(document.getElementById("root"));
            root.render(<App />);
          `,
          "/App.js": `${code}`}}
        
      ></Sandpack>
    </div>
  )
}

export default Editor