import React from 'react'

export default function DeleteConfirmationModal (props) {
  return (
    <div className={`modal ${props.modalClassName}`} id='DeleteConfirmationModal' tabIndex='-1' role='dialog' style={{
      display:'block',
      backgroundColor:'rgba(0,0,0,0.6)',
      }}>
      <div className={`modal-dialog modal-dialog-centered ${props.modalDialogClassName}`} role='document'>
        <div className='modal-content' >
          <div className='modal-header'>
            <h5 className='modal-title'>Delete Item</h5>
            <button type='button' className='close' data-dismiss='modal' onClick={props.onToggleModal} >
              <span>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            {`Are you sure you want to delete ${props.item.name} ?`}
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={props.onToggleModal}>No</button>
            <button type='button' className='btn btn-primary' onClick={() => {props.onToggleModal();  props.onDeleteItem(props.item.name)}}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )  
}