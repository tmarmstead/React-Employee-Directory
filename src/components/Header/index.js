import React, { PureComponent } from 'react';
import './style.css';
import Jumbotron from "react-bootstrap/Jumbotron";

class Header extends PureComponent {
    render() {
        return (

            <Jumbotron>
                <h1><strong>Employee Directory</strong></h1>
                <p>
                    Click or Search Below!
                </p>
                <p>
                </p>
            </Jumbotron>
        )
    }
}

export default Header;