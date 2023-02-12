import { useState } from 'react';
// import InputArea from './InputArea';
// import OutputArea from './OutputArea';
import Button from "react-bootstrap/Button";
// import { Alert } from "../index";
import { initialState, useAppContext } from '../../Context/appContext';

const CodeRunArea = (props) => {
    const { className } = props;
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState('');
    const { runCode, log } = useAppContext();

    const logCode = async (code, response) => {
        console.log('initialState.user', initialState.user)
        const params = {
            createdBy: initialState.user._id,
            code,
            response,
            content: code,
            interaction: 'RUN_CODE',
            question: initialState.question,
        };
        log(params);
    }

    const run = () => {
        const submit = async () => {
            setLoading(true);
            const sourcecode = initialState.getEditorValue();
            const result = await runCode({
                run_spec: {
                    language_id: 'python3',
                    sourcefilename: 'test.py',
                    sourcecode,
                    input: '',
                },
            });
            setOutput(result.stdout || result.stderr || result.cmpinfo);
            setLoading(false);
            await logCode(sourcecode, result.stdout || result.stderr || result.cmpinfo);
        };
        if (initialState.getEditorValue) submit();
        // else displayAlert();
        // setTimeout(clearAlert, 1000);
    };

    return (
        <div className={className}>
            <Button className="code-run-button" variant="primary" onClick={run}>Run</Button>
            <div className="code-run-output">
                <textarea readOnly value={output} />
            </div>
            {/*{showAlert && <Alert/>}*/}
            {/*<OutputArea loading={loading} text={output} />*/}
        </div>
    );
};

CodeRunArea.defaultProps = { className: '' };

export default CodeRunArea;
