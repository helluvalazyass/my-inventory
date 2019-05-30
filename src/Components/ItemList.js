import React from 'react'
import Item from './Item'

function ItemList(props) {
  return (
    <div className='container'>
      <ul style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
        {
          props.items.map((item) => (
            <li key={item.name} className='pb-5' style={{listStyleType:'none'}}>
          <Item  item={item} onDeleteItem={props.onDeleteItem} />
            </li>
          ))
        }
        
      </ul>
    </div>
  )
}
  
export default ItemList