import React from 'react'
import Wrapper from '../../assets/wrappers/IDEPage'

const IDEPage = () => {
  const changeLanguage = (e) =>{
    console.log(e.target.value)
  }
  let editor
  window.onload = function(){

  }
  return (
    <Wrapper>
      <div className='header'>
        TransCode Online IDE 
      </div>
      <div className='control-panel'>
        <select id = "languages" className='languages' onChange={(e)=>changeLanguage(e)}>
          Select languages
          <option value = "c">C</option>
          <option value = "c++">C++</option>
          <option value = "node">Node JS</option>
          <option value = "python">Python</option>
        </select>
        <div className='editor' id = "editor">

        </div>
        <button className='button-container' onClick={()=>{console.log("executeCode")}}>RUN</button>
      </div>
    </Wrapper>

  )
}

export default IDEPage
