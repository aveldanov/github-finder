import React from 'react';
import PropTypes from 'prop-types';


// Destructure props
const Navbar = ({ icon, title }) => {




  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}</h1>
    </nav>
  )

}




Navbar.defaultProps = {
  title: "Default Title",
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}


export default Navbar;
