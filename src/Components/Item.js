import React, { Component } from 'react'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import {
  withRouter,
} from 'react-router-dom'

class Item extends Component{
  
  constructor(props) {
    super(props)
    this.state = {
      showModal : false,
      modalClassName: 'modal-fade-in',
      modalDialogClassName: 'modal-dialog-fade-in',
    }
    this.handlleToggleModal = this.handlleToggleModal.bind(this)
  }

  shortDescription (longDescription) {
    return longDescription.length > 90 ? longDescription.split('').splice(0,90).join('').concat(['...']) : longDescription
  }
  handlleToggleModal() {
    const showModal = this.state.showModal
    
    
    // window.setTimeout(() => {
    //   this.setState(() => {
    //     return {
    //       modalClassName: !showModal ? 'modal-fade-in':'modal-fade-out',
    //       modalDialogClassName: !showModal ? 'modal-dialog-fade-in':'modal-dialog-fade-out',
    //     }  
    //   })
    // },300)

    this.setState(() => {
      return {
        showModal: !showModal,
      }
      
    })
  }
  render() {
    return (
    
      <div className='card' style={{width: '18rem', height:'30rem'}}>
        <img className='card-img-top' src={this.props.item.img_url} alt={this.props.item.name + ' photo'} />
        <div className='card-body'>
          <h5 className='card-title font-weight-bold'>{this.props.item.name}</h5>
          <p className='card-text' style={{height:'4rem'}}>{this.shortDescription(this.props.item.description)}</p>
          <div style={{display:'flex', flexWrap:'nowrap', justifyContent:'space-between'}}>
            {
              this.props.match.url === '/' ?
              <button href='' className='btn btn-success' >Buy</button> :
              <div>
              {/* <button className='btn btn-danger' onClick={() => this.props.onDeleteItem(item.name)}>Delete</button> */}
                <button 
                  className='btn btn-danger' 
                  data-toggle='modal' 
                  data-target='#DeleteConfirmationModal'
                  onClick={this.handlleToggleModal}
                >
                Delete
                </button>
                {
                  this.state.showModal ?
                  <DeleteConfirmationModal 
                    modalClassName={this.state.modalClassName} 
                    modalDialogClassName={this.state.modalDialogClassName}
                    item={this.props.item} 
                    onDeleteItem={this.props.onDeleteItem} 
                    onToggleModal={this.handlleToggleModal} />:
                    <div></div>
                } 
               
                
              </div> 
            }
            <div style={{alignSelf:'center'}}>Rs {this.props.item.price}/-</div>
          </div>
            
        </div>
      </div>
  
      
    )
  }
  
}

export default withRouter(Item)