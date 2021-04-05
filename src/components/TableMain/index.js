import { React, PureComponent } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
// import { render } from '@testing-library/react';
import ApiSearchHandler from "../Search/index"

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
          <tr>
            <td>Image goes here</td>
            <td>Mark Smith</td>
            <td>555-555</td>
            <td>@mdo</td>
            <td>DOB</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob Smith</td>
            <td>555-555</td>
            <td>@fat</td>
            <td>DOB</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry Smith</td>
            <td>555-555</td>
            <td>@twitter</td>
            <td>DOB</td>
          </tr>
        </tbody>
      </Table>
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