import React, {useEffect, useState} from 'react'
import Editor from '@monaco-editor/react'
import { useRef } from 'react'
import CodeRunArea from "./CodeRunArea";
import { initialState, useAppContext } from '../Context/appContext';

const IDE = () => {
    const { lastRecord } = useAppContext();
    const [initialValue, setInitialValue] = useState('');
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
        initialState.getEditorValue = () => editor.getValue();
        getInitialValue();
    }

    const getInitialValue = async () => {
        // if (!initialState.question) return;
        const { record } = await lastRecord({
            question: initialState.question,
            user: initialState.user._id,
        })
        setInitialValue(record.code);
    }

    return (
        <div>
            <Editor
              height='400px'
              theme='vs-bright'
              defaultLanguage='python3'
              onMount={handleEditorDidMount}
              value={initialValue}
            />
            <CodeRunArea className="code-run-area" />
        </div>
    )
}

export default IDE
