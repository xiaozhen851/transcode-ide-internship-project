import React, { useRef } from 'react'
import Wrapper from '../../assets/wrappers/IDEPage'
import { Outlet } from 'react-router-dom';
import IDE from '../../Component/IDE';
import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../../Context/appContext';
import { Alert } from '../../Component';



const IDEPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchedAnswer, setFetchedAnswer] = useState("");
  const {getAnswer,showAlert, displayAlert,clearAlert} = useAppContext()

  const handleClickEvent = (event) => {
    event.preventDefault();
    const inputQuestion = event.target.inputQuestion.value;
    // console.log(getAnswer(inputQuestion))
    if(!inputQuestion){
      displayAlert()
      return
    }
    setLoading(true);
    getAnswer(inputQuestion).then((response) => {
        // console.log(response)
        setError(false);
        setFetchedAnswer(response.answer);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => setLoading(false));
    clearAlert()
  };
  return (
    <Wrapper>
      {/* <Outlet/> */}
      <div className='container'>

        <div className='header'>
          TransCode Online IDE 
        </div>
        <div className='control-panel'>
          <select id = "languages" className='languages'>
            Select languages
            <option value = "python">Python</option>
          </select>
          <div className='editor' id = "editor">
            <IDE msg ={fetchedAnswer}/>

          </div>
          

          {/* <button className='button-container' onClick={()=>{console.log("executeCode")}}>RUN</button> */}
        </div>
        
      </div>
      <Form onSubmit={handleClickEvent}>
        {error && <p> {error} </p>}
        <Form.Label>Enter your Description</Form.Label>
          <FloatingLabel controlid="inputQuestion" label='Please use """""" to surround your description' htmlFor="inputQuestion">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              name="inputQuestion"
              controlid="inputQuestion"
              style={{ width:'30%',height: '200px' }}
            />
          </FloatingLabel>
          {loading && <div>Generating..............</div>}
          <br />
          <Button variant="primary" type="submit">Submit</Button>
          {showAlert && <Alert/>}

      </Form>

    </Wrapper>

  )
}

export default IDEPage
