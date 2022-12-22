import React from 'react'
import Card from 'react-bootstrap/Card';


const AddTwo = () => {
    return (
        <Card className = "card">
            <Card.Body>
            <Card.Title>Add two numbers</Card.Title>
                <hr></hr>
                <Card.Text>
                You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
                </Card.Text>
            </Card.Body>
        </Card>
      )
}

export default AddTwo
