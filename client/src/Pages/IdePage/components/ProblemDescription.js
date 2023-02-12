import { useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { useAppContext, initialState } from '../../../Context/appContext';

export default function ProblemDescription() {
    const { getQuestionDesc } = useAppContext();
    const [show, setShow] = useState(true);
    const [desc, setDesc] = useState('');
    const [title, setTitle] = useState('');
    const [problem, setProblem] = useState('');

    const getDesc = async () => {
        if (!initialState.question) return;
        const data = await getQuestionDesc(initialState.question);
        setProblem(data.question);
        setTitle(data.question.title);
        setDesc(data.question.problem);
        // console.log(data);
    }

    useEffect(() => {
        getDesc().then();
    }, [initialState.question]);

    // show/hide the problem description
    const handleShow = () => {
        setShow(!show);
        if (!initialState.question) return;
        if (show) {
            // description = desc;
            setDesc(problem.problem.slice(0, 80) + '...');
        } else {
            setDesc(problem.problem);
        }
    }

    return (
        <div className="problem-description">
            <div className="problem-description-button">
                <div>
                    <Button variant="outline-success" size="sm" onClick={handleShow}>
                        <FaCaretDown style={{ display: show ? 'none' : '' }} />
                        <FaCaretUp style={{ display: show ? '' : 'none' }} />
                        <span onClick={handleShow}>Question</span>
                    </Button>
                </div>
            </div>
            <div className="problem-description-content" style={{ maxHeight: show ? '130px' : '32px' }}>
                <span className="title" style={{ display: title ? '' : 'none' }}>{title}:</span>
                <span className="desc">{desc || 'Code anything you want!'}</span>
            </div>
        </div>
    )
}
