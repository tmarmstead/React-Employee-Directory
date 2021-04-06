import React, { PureComponent } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
// import { render } from '@testing-library/react';
// import ApiSearchHandler from "../Search/index";

class TableMain extends PureComponent {
  render() {
    return (
      <Table striped bordered hover>
        <thead className="head">
          <tr>
            <th>Image</th>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody className="head">
          {this.props.employees.map(function (props) {
            return (
              <tr>
                <td><img src={props.picture.thumbnail} alt="employee" /></td>
                <td>{props.name.first} {props.name.last}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob.date}</td>
              </tr>
            )
          })}
        </tbody>
      </Table >
    )
  }
}

const ResultsRow = ({ image, fullName, phone, email, dob }) => (
  <tr>
    <td><img src={image.thumbnail} alt='head shot'></img></td>
    <td>{fullName.first} + {fullName.last}</td>
    <td>{phone}</td>
    <td>{email}</td>
    <td>{dob.age}</td>
  </tr>
)
export default TableMain;

// Accessing API call Resuls:
    // Image: res.picture.medium
    // Name: res.name.first + results.name.last
    // Phone: res.phone.cell
    // email: res.email
    // DOB: res.dob.date