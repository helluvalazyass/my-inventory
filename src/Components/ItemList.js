import React, { Component } from 'react'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import {
  withRouter,
} from 'react-router-dom'

class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.handlleToggleModal = this.handlleToggleModal.bind(this)
  }
  shortDescription (longDescription) {
    return longDescription.length > 90 ? longDescription.split('').splice(0,90).join('').concat(['...']) : longDescription
  }
  handlleToggleModal() {
    this.setState((currentState) => {
      return {
        showModal: !this.currentState.showModal
      }
    })
  }

  render() {
    return (
      <div className='container'>
        <ul style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
          {
            this.props.items.map((item) => (
              
              <li key={item.name} className='pb-5' style={{listStyleType:'none'}}>
              <div className='card' style={{width: '18rem', height:'30rem'}}>
                <img className='card-img-top' src={item.img_url} alt={item.name + ' photo'} />
                <div className='card-body'>
                  <h5 className='card-title font-weight-bold'>{item.name}</h5>
                  <p className='card-text' style={{height:'4rem'}}>{this.shortDescription(item.description)}</p>
                  <div style={{display:'flex', flexWrap:'nowrap', justifyContent:'space-between'}}>
                    {
                      this.props.match.url === '/' ?
                      <a href='javascript:void(0)' className='btn btn-success' >Buy</a> :
                      <div>
                      <button className='btn btn-danger' onClick={() => this.props.onDeleteItem(item.name)}>Delete</button>
                        {/* <button 
                          className='btn btn-danger' 
                          data-toggle='modal' 
                          data-target='#DeleteConfirmationModal'
                          onClick={() => {
                            this.setState({
                              showModal: true,
                            })
                            }}
                        >
                        Delete
                        </button>
                        {
                          this.state.showModal ? <DeleteConfirmationModal item={item} onDeleteItem={this.onDeleteItem} onToggleModal={this.handlleToggleModal} />:null
                        } 
                        */}
                        
                      </div> 
                    }
                    <div style={{alignSelf:'center'}}>Rs {item.price}/-</div>
                  </div>
                    
                </div>
              </div>
  
              </li>
            ))
          }
          
        </ul>
      </div>
    )
  }
  
  
}
export default withRouter(ItemList)