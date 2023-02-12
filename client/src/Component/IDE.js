import React from 'react'
import Editor from '@monaco-editor/react'
import { useRef } from 'react'
import CodeRunArea from "./CodeRunArea";
import { initialState } from '../Context/appContext';

const IDE = () => {
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
        initialState.getEditorValue = () => editor.getValue();
    }

    return (
        <div>
            <Editor
              height='400px'
              theme='vs-bright'
              defaultLanguage='python3'
              onMount={handleEditorDidMount}
            />
            <CodeRunArea className="code-run-area" />
        </div>
    )
}

export default IDE
