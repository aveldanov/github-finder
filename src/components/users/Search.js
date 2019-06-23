import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {



  //Degine state - destructure and assign initia value  - blank
  const [text, setText] = useState('')

  // state = {
  //   text: ''
  // }

  const handleOnChange = (e) => {
    setText(
      e.target.value
    )
  }


  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert(' Please enter something', 'light');

    } else {
      searchUsers(text);
      setText('');
    }
  }



  return (
    <div>
      <form
        action=""
        className="form"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={handleOnChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block" />
      </form>

      {
        showClear && <button
          className="btn btn-light btn-block"
          onClick={clearUsers}
        >Clear</button>
      }

    </div >
  )

}


Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired

};

export default Search
