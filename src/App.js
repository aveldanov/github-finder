import React, { useState, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';


const App = () => {
  // state = {
  //   users: [],
  //   loading: false,
  //   alert: null,
  //   user: {},
  //   repos: []
  // }
  const [alert, setAlert] = useState(null);



  // // Search Github users
  // const searchUsers = async (text) => {

  //   setLoading(true);

  //   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


  //   setUsers(res.data.items);
  //   setLoading(false)


  // }

  // Get a single github user
  // username === login

  // const getUser = async (username) => {
  //   setLoading(true);


  //   const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   // this.setState({
  //   //   user: res.data,
  //   //   loading: false
  //   // })

  //   setUser(res.data);
  //   setLoading(false);

  // }

  // Get users repos

  // const getUserRepos = async (username) => {
  //   setLoading(true);


  //   const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   setRepos(res.data);
  //   setLoading(false);


  // }


  // Clear users from state
  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);

  // }

  // Set Alert

  const showAlert = (msg, type) => {

    setAlert(
      {
        msg: msg,
        type: type
      }
    )

    // this.setState({
    //   alert: {
    //     msg: msg,
    //     type: type
    //   }
    // })

    setTimeout(() => setAlert(
      null
    ), 5000)
  }



  // const { users, loading, user, repos } = this.state;

  return (
    <GithubState>

      <Router>
        <div className="App" >
          <Navbar />
          <div className="container">
            <Alert alert={alert} />

            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      // clearUsers={clearUsers}
                      // showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users

                    />

                  </Fragment>
                )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User}
              />
            </Switch>

          </div>
        </div>
      </Router>
    </GithubState>


  );


}

export default App;
