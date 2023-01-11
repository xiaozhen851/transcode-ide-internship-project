import React from 'react'
import problems from "../../utils/questions"
import Card from 'react-bootstrap/Card';
import Wrapper from '../../assets/wrappers/Problem';
import { NavLink} from 'react-router-dom';




const ProblemList = () => {

  return (
    <Wrapper>
        <h3>Problem</h3>
        {
            problems.map((item)=>{
                const {title, problem, path} = item
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
                        <NavLink to = {path} className="btn btn-hero">Try</NavLink>

                    </Card>

                </div>


                )
            })
        }

    </Wrapper>
  )
}

export default ProblemList
