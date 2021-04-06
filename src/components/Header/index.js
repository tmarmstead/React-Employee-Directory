import React, { PureComponent } from 'react';
import './style.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/container"

class Header extends PureComponent {
    render() {
        return (

            <Jumbotron fluid>
                <Container>
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