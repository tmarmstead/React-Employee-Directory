import React, { PureComponent } from 'react';
import './style.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/container"

class Header extends PureComponent {
    render() {
        return (

            <Jumbotron fluid style={{
                backgroundImage: `url("https://i.picsum.photos/id/534/4000/3000.jpg?hmac=lZH_v84ot8WWUIgqwrJvFKqtockRBoqVnStUqqaJFug")`, backgroundSize: 'cover'
            }}>
                <Container style={{ backgroundColor: 'white' }} className="container">
                    <h1><strong>Employee Directory</strong></h1>
                    <p>
                        Use the Search Bar to Filter Through Employees
                </p>
                </Container>
            </Jumbotron>
        )
    }
}

export default Header;