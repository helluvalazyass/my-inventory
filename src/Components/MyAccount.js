import React from 'react'
import ItemList from './ItemList'
import AddItemForm from './AddItemForm'
import {
  Route,
  Link,
  withRouter,
} from 'react-router-dom'


function MyAccount (props) {
  return (
    <div>
      <aside>
        <ul className='nav nav-pills flex-column'>
          <li className="nav-item">
            <Link className="nav-link" to={`${props.match.url}/add-item`}>Add Item</Link>
          </li>
          <li>
            <Link className="nav-link" to={`${props.match.url}/delete-item`}>Delete Item</Link>
          </li>
        </ul>
      </aside>
      <div>
        <Route path={`${props.match.path}/add-item`} component={AddItemForm} />
        <Route path={`${props.match.path}/delete-item`} render={() => {
          return (
            <ItemList items={props.items} onDeleteItem={props.onDeleteItem} />
          )
        }} />
      </div>
    </div>
  )
}

export default withRouter(MyAccount)