import React from 'react'
import Editor from '@monaco-editor/react'
import { useRef } from 'react'

const IDE = (props) => {
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    }
    return (

        <div>
            <Editor
              height='400px'
              width= "670px"
              theme='vs-bright'
              defaultLanguage='markdown'
              onMount={handleEditorDidMount}
              value = {props.msg}
              >

            </Editor>
        </div>
  )
}

export default IDE
