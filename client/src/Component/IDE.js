import React from 'react'
import Editor from '@monaco-editor/react'
import { useRef } from 'react'
import CodeRunArea from "./CodeRunArea";

const IDE = () => {
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    }

    const getEditorValue = () => {
        console.log('get value', editorRef.current.getValue())
        return editorRef.current.getValue();
    }

    return (
        <div>
            <Editor
              height='400px'
              theme='vs-bright'
              defaultLanguage='python3'
              onMount={handleEditorDidMount}
            />
            <CodeRunArea getSourceCode={getEditorValue} className="code-run-area" />
        </div>
    )
}

export default IDE
