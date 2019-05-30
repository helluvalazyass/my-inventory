import React, { Component } from 'react';
import Nav from './Nav'
import ItemList from './ItemList'
import About from './About'
import MyAccount from './MyAccount'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import './App.css';
import ItemPlaceholderImage from '../Images/image-placeholder.png'

class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Loading',
    }
  }
  
  componentDidMount() {
    const finalText = 'Loading...'
    this.loadingInterval = window.setInterval(() => {
      this.setState({
        text: this.state.text === finalText ? 'Loading' : this.state.text + '.'
      })
    }, 200)
  }

  componentWillUnmount() {
    window.clearInterval(this.loadingInterval)
  }

  render() {
    return (
      <div className=''>{this.state.text}</div>
    )
  }
}
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      loading: true,
    }
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }
  componentDidMount() {
    window.API = {
      fetchItems() {
        
        return new Promise((resolve, reject) => {
          const items = [
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
          ]
          window.setTimeout(() => {
            resolve(items)
          }, 2000)
        })
      } 
    }
    window.API.fetchItems()
    .then((items) => {
      this.setState({
        items,
        loading: false,
      })
    })
  }

  handleDeleteItem (name) {
    this.setState((currentState) => {
      return {
        items: currentState.items.filter((item) => (
          item.name !== name
        ))
      }
    })
  }

  render () {
    return (
      <BrowserRouter>
        <div >
          <Nav />
          <hr />
          <Route exact path='/' render={() => {
            if(this.state.loading) {
              return <Loading />
            }
            else {
              return (
                <ItemList items={this.state.items} />
              )
            }
            
          }} />
          <Route path='/about' component={About} />
          <Route path='/my-account' render={() => {
            return (
              <MyAccount items={this.state.items} onDeleteItem={this.handleDeleteItem} />
            )
          }} />
        </div>
      </BrowserRouter>
    )
  }
  
}

export default App;
