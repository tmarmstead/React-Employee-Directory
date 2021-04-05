import React, { PureComponent } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
import API from '../../utils/API';


class ApiSearchHandler extends PureComponent {
  state = {
    results: [],
    filteredResults: [],
    findUsers: ""

  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.getUsers()
      .then(res => this.setState({
        results: res.data.results,
        filteredResults: res.data.results
      }))
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    const value = e.target.value;
    const filteredUsers = this.state.results.filter(user => {
      let temp = Object.values(user).join('').toLowerCase();
      return temp.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({
      filteredResults: filteredUsers
    })
    console.log(filteredUsers, this.state.filteredResults)
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.searchEmployees(this.state.search)
  //   console.log("clicked button")
  //   console.log(this.state)
  // };

  render() {
    console.log(this.state.results);
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search"></label>
          <input
            onChange={this.handleInputChange}
            value={this.state.value}
            name="findUsers"
            type="text"
            className="form-control"
            placeholder="What are you looking for?"
            id="search"
          />
          <br />
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Search
        </button>
        </div>
      </form>
    )
  }


}

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

export default { ApiSearchHandler, TableMain };
