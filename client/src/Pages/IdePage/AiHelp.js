import React from 'react'
import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { initialState, useAppContext } from '../../Context/appContext';
import { Alert } from '../../Component';
import AiAnswer from './components/AiAnswer';


const AiHelp = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchedAnswer, setFetchedAnswer] = useState("");
  const { getAnswer, log, displayAlert, clearAlert } = useAppContext();

  const logHelp = async (content) => {
    const params = {
      createdBy: initialState.user._id,
      code: initialState.getEditorValue(),
      content,
      interaction: 'ASK_QUESTION',
      question: initialState.question,
    };
    log(params);
  }

  const handleClickEvent = (event) => {
    event.preventDefault();
    const inputQuestion = event.target.inputQuestion.value;
    // console.log(getAnswer(inputQuestion))
    if (!inputQuestion) {
      displayAlert();
      return;
    }
    setLoading(true);
    logHelp(inputQuestion);
    const question = `"""${inputQuestion}"""`;
    getAnswer(question).then((response) => {
        // console.log(response)
        setError(false);
        setFetchedAnswer(response.answer);
    })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    clearAlert()
  };

  return (
      <Form onSubmit={handleClickEvent} className='ai-help-form'>
        <div className="input-question">
          <Form.Label>Ask For Help</Form.Label>
          <FloatingLabel controlid="inputQuestion" label="Please describe your question here" htmlFor="inputQuestion">
            <Form.Control
                as="textarea"
                placeholder="Please describe your question here"
                name="inputQuestion"
                controlid="inputQuestion"
                style={{ width:'100%', height: '120px', resize: 'none' }}
            />
          </FloatingLabel>
        </div>
        <Button variant="primary" type="submit" className="submit-button" size="sm">Submit</Button>
        {loading && <div>Generating..............</div>}
        {error && <p> {error} </p>}
        {/*{showAlert && <Alert/>}*/}
        {!loading && fetchedAnswer && <AiAnswer answer={fetchedAnswer}></AiAnswer>}

      </Form>
  )
}

export default AiHelp
