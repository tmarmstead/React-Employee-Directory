import React, { PureComponent } from 'react';
import './style.css';
import API from '../../utils/API';
import TableMain from "../TableMain/index";


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
    console.log("filtered users :", filteredUsers, "this.state.filteredusres :", this.state.filteredResults)
  };


  render() {
    console.log("this.state.results :", this.state.results);
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search"></label>
          <input
            onChange={this.handleInputChange}
            value={this.state.value}
            name="findUsers"
            type="text"
            className="form-control input"
            placeholder="What are you looking for?"
            id="search"
          />
          <br />
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Search
        </button>
          <TableMain employees={this.state.filteredResults} />
        </div>
      </form>

    )

  }

}


export default ApiSearchHandler;
