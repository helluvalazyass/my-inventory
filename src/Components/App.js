import React, { Component } from 'react';
import Nav from './Nav'
import Home from './Home'
import About from './About'
import MyAccount from './MyAccount'
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      loading: true,
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div >
          <Nav />
          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/my-account' component={MyAccount} />
        </div>
      </BrowserRouter>
    )
  }
  
}

export default App;
