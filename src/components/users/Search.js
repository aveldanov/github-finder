import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired

  };



  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert(' Please enter something', 'light');

    } else {
      this.props.searchUsers(this.state.text)
      this.setState({
        text: ''
      })
    }
  }


  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form
          action=""
          className="form"
          onSubmit={this.handleOnSubmit}
        >
          <input
            type="text"
            name="text"
            placeholder="Search users..."
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block" />
        </form>

        {showClear && <button
          className="btn btn-light btn-block"
          onClick={clearUsers}

        >Clear</button>}

      </div>
    )
  }
}

export default Search
