import React from 'react'
import Wrapper from '../../assets/wrappers/IDEPage';
import IDE from '../../Component/IDE';
import ProblemDescription from './components/ProblemDescription';
import AiHelp from './AiHelp';


const IdePage = () => {

  return (
    <Wrapper className='ide-page'>
      <ProblemDescription />

      <div className='is-flex'>
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
            <IDE/>
          </div>

          {/* <button className='button-container' onClick={()=>{console.log("executeCode")}}>RUN</button> */}
        </div>

      </div>

      <AiHelp/>
      </div>
    </Wrapper>
  )
}

export default IdePage
