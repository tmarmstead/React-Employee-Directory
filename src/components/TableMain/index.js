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
            <th>#</th>
            <th></th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
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