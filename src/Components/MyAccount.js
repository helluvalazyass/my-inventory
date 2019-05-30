import React, { Component } from 'react'
import ItemList from './ItemList'
import AddItemForm from './AddItemForm'
import {
  Route,
  Link,
  withRouter,
  Redirect,
} from 'react-router-dom'


class MyAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMenu: 'add',
    }
  }

  // handleActiveMenu(menu) {
  //   this.setState = {
  //     activeMenu: menu,
  //   }
  // }

  render() {
    return (
      <div className='row'>
        <aside className='col-sm-2'>
          <ul className='nav nav-pills flex-column'>
            <li className="nav-item">
              <Link className={`nav-link ${this.state.activeMenu === 'add'? 'active':''}`} to={`${this.props.match.url}/add-item`} onClick={() => {
                this.setState({activeMenu: 'add'})
              }}>Add Item</Link>
            </li>
            <li>
              <Link className={`nav-link ${this.state.activeMenu === 'delete'? 'active':''}`} to={`${this.props.match.url}/delete-item`} onClick={() => {
                this.setState({activeMenu: 'delete'})
              }} >Delete Item</Link>
            </li>
          </ul>
        </aside>
        <div className='col-sm-10'>
          <Route exact path={`${this.props.match.path}`} render={() => <Redirect to={`${this.props.match.path}/add-item`}/>} />
          <Route path={`${this.props.match.path}/add-item`} component={AddItemForm} />
          <Route path={`${this.props.match.path}/delete-item`} render={() => {
            return (
              <ItemList items={this.props.items} onDeleteItem={this.props.onDeleteItem} />
            )
          }} />
        </div>
      </div>
    )
  }
   
}

export default withRouter(MyAccount)