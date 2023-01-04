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
              theme='vs-bright'
              defaultLanguage='markdown'
              onMount={handleEditorDidMount}
              value = {props.msg}
            />
        </div>
  )
}

export default IDE
