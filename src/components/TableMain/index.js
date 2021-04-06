import React, { PureComponent } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
// import { render } from '@testing-library/react';
// import ApiSearchHandler from "../Search/index";

class TableMain extends PureComponent {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {this.filteredResults
            .map}


        </tbody>
      </Table >
    )
  }
}

export default TableMain;

// Accessing API call Resuls:
    // Image: res.picture.medium
    // Name: res.name.first + results.name.last
    // Phone: res.phone.cell
    // email: res.email
    // DOB: res.dob.date