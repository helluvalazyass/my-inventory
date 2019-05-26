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
import ItemPlaceholderImage from '../Images/image-placeholder.png'


function Loading () {
  return (
    <div>Loading</div>
  )
}
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        {
          name: 'Item1',
          description: 'This is a short item description. It describes the item.',
          price: 2000,
          img_url: ItemPlaceholderImage,
        },
        {
          name: 'Item2',
          description: 'This is an item description. It describes the item. Describe means explaining the about the item.',
          price: 2000,
          img_url: ItemPlaceholderImage,
        },
        {
          name: 'Item3',
          description: 'This is an item description. It describes the item. Describe means explaining the about the item.',
          price: 2000,
          img_url: ItemPlaceholderImage,
        },
        {
          name: 'Item4',
          description: 'This is an item description. It describes the item. Describe means explaining the about the item.',
          price: 2000,
          img_url: ItemPlaceholderImage,
        },
        {
          name: 'Item5',
          description: 'This is an item description. It describes the item. Describe means explaining the about the item.',
          price: 2000,
          img_url: ItemPlaceholderImage,
        },
        {
          name: 'Item6',
          description: 'This is an item description. It describes the item. Describe means explaining the about the item.',
          price: 2000,
          img_url: ItemPlaceholderImage,
        },
      ],
      loading: true,
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div >
          <Nav />
          <hr />
          <Route exact path='/' render={() => {
            // if(this.state.loading) {
            //   return <Loading />
            // }
            // else {
              return (
                <Home items={this.state.items} />
              )
            // }
            
          }} />
          <Route path='/about' component={About} />
          <Route path='/my-account' component={MyAccount} />
        </div>
      </BrowserRouter>
    )
  }
  
}

export default App;
