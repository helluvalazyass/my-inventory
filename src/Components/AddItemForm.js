import React, { Component } from 'react'

export default class AddItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemNameInput:'',
      itemDescriptionInput: '',
      itemImageInput: '',
    }
    this.handleResetForm = this.handleResetForm.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }
  
  handleResetForm() {
    this.setState({
      itemNameInput:'',
      itemDescriptionInput: '',
      itemImageInput: '',
    })
  }

  handleItemNameInput(e) {
    this.setState({
      itemNameInput: e.target.value,
    })
  }

  handleItemDescriptionInput(e) {
    this.setState({
      itemDescriptionInput: e.target.value,
    })
  }

  handleItemImageInput(e) {
    this.setState({
      itemImageInput: e.target.value,
    })
  }

  handleSubmitForm(e) {
    e.preventDefault()
  }

  render(){
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <form id='addItemForm' className='w-50'>
          <div className='form-group row'>
            <label for='itemNameInput' className='col-sm-4 col-form-label'> Item Name </label>
            <input 
            className='form-control col-sm-8' 
            id='itemNameInput' 
            type='text' 
            placeholder='Enter Item Name' 
            value={this.state.itemNameInput}
            onChange={(e) => this.handleItemNameInput(e)}  />
          </div>
          <div className='form-group row'>
            <label for='itemDescriptionInput' className='col-sm-4 col-form-label'> Item Description </label>
            <textarea 
            className='form-control col-sm-8' 
            id='itemDescriptionInput' 
            placeholder='Enter Item Description' 
            value={this.state.itemDescriptionInput} 
            row='4'
            onChange={(e) => this.handleItemDescriptionInput(e)}  />
          </div>
          <div className='form-group row'>
            <label for='itemImageInput' className='col-sm-4 col-form-label'>Item Image</label>
            <input 
            id='itemImageInput' 
            type='file' 
            className='col-sm-8 form-control-file' 
            value={this.state.itemImageInput}
            onChange={(e) => this.handleItemImageInput(e)}  />
            <small className='form-text text-muted'>Only upload .jpg or .png files</small>
          </div>
          <div className='mt-5 d-flex justify-content-end'>
          <button className='btn btn-secondary ml-3' type='reset' onClick={this.handleResetForm}>Reset</button>
          <button className='btn btn-success ml-3' type='submit' onClick={this.handleSubmitForm}>Add Item</button>
          </div>
        </form>
      </div>
    )
  }
 
}