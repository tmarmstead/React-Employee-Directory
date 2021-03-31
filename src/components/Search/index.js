import React from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';

function Search() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
          </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Search;