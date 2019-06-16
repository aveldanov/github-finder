import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import axios from 'axios';


class App extends Component {

  componentDidMount() {




  }



  render() {

    return (
      <div className="App" >
        <Navbar />
        <div className="container">
          <Users />
        </div>


      </div>
    );
  }

}

export default App;
