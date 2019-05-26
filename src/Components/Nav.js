import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'


export default class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeLink: [true, false, false],
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle(index) {
    let newactiveLink = [false, false, false]
    newactiveLink[index] = true
    this.setState({
      activeLink: newactiveLink,
    })
  }

  render () {
    return (    
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark justify-content-left'>
      <h1 className='navbar-brand mr-5'>My Inventory App</h1>
        <ul className='navbar-nav mx-5 pl-5' >
          <li className='nav-item mx-4'>
            <Link className={`nav-link ${this.state.activeLink[0] ? `active` : ``}`} onClick={() => this.toggle(0)} to='/'>Home</Link>
          </li>
          <li className='nav-item mx-4'>
            <Link className={`nav-link ${this.state.activeLink[1] ? `active` : ``}`} onClick={() => this.toggle(1)} to='/about'>About</Link>
          </li>
          <li className='nav-item mx-4'>
            <Link className={`nav-link ${this.state.activeLink[2] ? `active` : ``}`} onClick={() => this.toggle(2)} to='/my-account'>My Account</Link>
          </li>
        </ul>
      </nav>
    )
  }  
}