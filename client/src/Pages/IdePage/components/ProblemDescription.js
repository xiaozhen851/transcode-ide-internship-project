import { useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

export default function ProblemDescription(props) {
    const [show, setShow] = useState(true);
    const [desc, setDesc] = useState('');
    const description =
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.' +
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.' +
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.' +
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.' +
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.' +
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.';

    // show/hide the problem description
    const handleShow = () => {
        if (show && desc.length > 80) {
            setDesc(desc.slice(0, 80) + '...');
        } else {
            setDesc(description);
        }
        setShow(!show);
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
                <span className="title">Two Sum:</span>
                <span className="desc">{desc}</span>
            </div>
        </div>
    )
}
