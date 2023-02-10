import React, { useEffect, useState } from 'react'
// import problems from "../../utils/questions"
import Card from 'react-bootstrap/Card';
import Wrapper from '../../assets/wrappers/Problem';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../Context/appContext';

const ProblemList = () => {
    const { getQuestionList } = useAppContext();
    const [list, setList] = useState([]);
    // const [loading, setLoading] = useState(false);

    const getList = async () => {
        // if (loading) return;
        // setLoading(true);
        const { questions } = await getQuestionList();
        // console.log(loading);
        // setLoading(false);
        setList(questions);
        // console.log(questions);
    }

    useEffect(() => {
        getList().then();
    }, []);

  return (
    <Wrapper>
        <h3>Problem</h3>
        {
            list.map((item)=>{
                const {title, problem, _id} = item
                return(
                <div className='card-container' key={_id}>
                    <Card className = "card">
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <hr></hr>
                            <Card.Text>
                                {problem}
                            </Card.Text>
                        </Card.Body>
                        <NavLink to={`/?id=${_id}`} className="btn btn-hero">Try</NavLink>
                    </Card>
                </div>
                )
            })
        }
    </Wrapper>
  )
}

export default ProblemList
