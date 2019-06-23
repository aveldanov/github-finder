import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {

  const githubContext = useContext(GithubContext);

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
      githubContext.searchUsers(text);
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
        githubContext.users.length > 0 && <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >Clear</button>
      }

    </div >
  )

}


Search.propTypes = {
  setAlert: PropTypes.func.isRequired

};

export default Search
