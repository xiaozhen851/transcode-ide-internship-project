import Card from 'react-bootstrap/Card';
import React from 'react'

const SumTwo = () => {
  return (
    <Card className = "card">
        <Card.Body>
        <Card.Title>Two sum</Card.Title>
            <hr></hr>
            <Card.Text>
                Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default SumTwo
