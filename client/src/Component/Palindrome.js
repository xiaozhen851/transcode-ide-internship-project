import React from 'react'
import Card from 'react-bootstrap/Card';


const Palindrome = () => {
    return (
        <Card className = "card">
            <Card.Body>
            <Card.Title>Palindrome</Card.Title>
                <hr></hr>
                <Card.Text>
                    Given an integer x, return true if x is a palindrome, and false otherwise.
                </Card.Text>
            </Card.Body>
        </Card>
      )
}

export default Palindrome
