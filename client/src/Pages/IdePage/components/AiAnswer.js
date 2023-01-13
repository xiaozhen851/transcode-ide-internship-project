import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './AiAnswer.css';
import Form from "react-bootstrap/Form";

export default function AiAnswer(props) {
    const [result, setResult] = useState(['']);
    const [currentIndex, setCurrentIndex] = useState(0);

    const answer = props.answer.replace('\n', '');

    // 为实现一行一行输出，按照'\n'将数据分成一个数组的不同元素
    const answerArray = answer.split("\n");

    useEffect(() => handleShowLine(), []);

    const handleShowLine = () => {
        //循环检查当前字符串是否是换行符，如果是跳的行数+1，如果不是break
        let line = 1;
        let tempIndex = currentIndex;
        while (true) {
            if (!answerArray[tempIndex]) {
                line = line + 1;
                tempIndex = tempIndex + 1;
            } else {
                break;
            }
        }
        setResult(answerArray.slice(0, tempIndex + 1));
        setCurrentIndex((currentIndex + line) % answerArray.length);
    }

    const handleShowAll = () => {
        setResult(answerArray);
    }

    return (
        <div className="ai-answer">
            <Form.Control
                readOnly
                as="textarea"
                name="aiAnswer"
                controlid="aiAnswer"
                value={result.join('\n')}
                rows={result.length + 1}
            />
            {/*<div className="answer-lines">*/}
            {/*    {result.map((line, index) => {*/}
            {/*        if (index < 1) return;*/}
            {/*        let padding = 0;*/}
            {/*        for (const char of line) {*/}
            {/*            if (char === ' ') {*/}
            {/*                padding += 7;*/}
            {/*            } else break;*/}
            {/*        }*/}
            {/*        return (<code key={index} style={{ paddingLeft: padding + 'px' }}>{line + '\n'}</code>);*/}
            {/*    })}*/}
            {/*</div>*/}
            <div className="answer-show-buttons">
                <Button onClick={handleShowLine} variant="outline-primary" size="sm">Show Next</Button>
                <Button onClick={handleShowAll} variant="outline-secondary" size="sm">Show All</Button>
            </div>
        </div>
    )
}
