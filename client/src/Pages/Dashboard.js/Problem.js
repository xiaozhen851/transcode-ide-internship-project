import React from 'react'
import problems from "../../utils/questions"
import Card from 'react-bootstrap/Card';
import Wrapper from '../../assets/wrappers/Problem';
import { NavLink } from 'react-router-dom';




const Problem = () => {
  return (
    <Wrapper>
        <h3>Problem</h3>
        {
            problems.map((item)=>{
                const {title, problem, id} = item
                return(
                <div className='card-container'>
                    <Card className = "card">
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <hr></hr>
                            <Card.Text>
                                {problem}
                            </Card.Text>
                        </Card.Body>
                        <NavLink to = "/ide"></NavLink>

                    </Card>

                </div>


                )
            })
        }
        
    </Wrapper>
  )
}

export default Problem
