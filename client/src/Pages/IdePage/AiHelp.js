import React from 'react'
import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../../Context/appContext';
import { Alert } from '../../Component';


const AiHelp = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchedAnswer, setFetchedAnswer] = useState("");
  const { getAnswer, showAlert, displayAlert, clearAlert } = useAppContext()

  const handleClickEvent = (event) => {
    event.preventDefault();
    const inputQuestion = event.target.inputQuestion.value;
    // console.log(getAnswer(inputQuestion))
    if (!inputQuestion) {
      displayAlert();
      return;
    }
    setLoading(true);
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

        {error && <p> {error} </p>}
        <Form.Label>Ask For Help</Form.Label>
        <FloatingLabel controlid="inputQuestion" label='Please describe your question here' htmlFor="inputQuestion">
          <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              name="inputQuestion"
              controlid="inputQuestion"
              style={{ width:'100%', minHeight: '100px' }}
          />
        </FloatingLabel>
        <br />
        <Button variant="primary" type="submit">Submit</Button>
        {loading && <div>Generating..............</div>}
        {showAlert && <Alert/>}
        {!loading && <div>{fetchedAnswer}</div>}

      </Form>
  )
}

export default AiHelp
