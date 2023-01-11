// import { Stack, Text } from '@mantine/core';
import { useState } from 'react';
// import InputArea from './InputArea';
// import OutputArea from './OutputArea';
import Button from "react-bootstrap/Button";
import { Alert } from "../index";
import { useAppContext } from "../../Context/appContext";

const CodeRunArea = (props) => {
    const { className, getSourceCode } = props;
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState('');
    const { runCode, showAlert, displayAlert, clearAlert } = useAppContext()

    const run = () => {
        const submit = async () => {
            setLoading(true);
            const result = await runCode({
                run_spec: {
                    language_id: 'python3',
                    sourcefilename: 'test.py',
                    sourcecode: getSourceCode(),
                    input: '',
                },
            });
            setOutput(result.stdout || result.stderr || result.cmpinfo);
            setLoading(false);
        };
        if (getSourceCode) submit();
        else displayAlert();
        setTimeout(clearAlert, 1000);
    };
    return (
        <div className={className}>
            <Button variant="primary" onClick={run}>Run</Button>
            <div className="code-run-output">{output}</div>
            {showAlert && <Alert/>}
            {/*<OutputArea loading={loading} text={output} />*/}
        </div>
    );
};

CodeRunArea.defaultProps = { className: '', getSourceCode: null };

export default CodeRunArea;
