import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)

  }
  shortDescription (longDescription) {
    return longDescription.length > 90 ? longDescription.split('').splice(0,90).join('').concat(['...']) : longDescription
  }
  
  render() {
    return (
      <div className='container'>
        <ul style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
          {
            this.props.items.map((item) => (
              
              <li key={item.name} className='pb-5' style={{listStyleType:'none'}}>
              <div className='card' style={{width: '18rem', height:'30rem'}}>
                <img className='card-img-top' src={item.img_url} alt={item.name + ' photo'} />
                <div className='card-body'>
                  <h5 className='card-title font-weight-bold'>{item.name}</h5>
                  <p className='card-text' style={{height:'4rem'}}>{this.shortDescription(item.description)}</p>
                  <div style={{display:'flex', flexWrap:'nowrap', justifyContent:'space-between'}}>
                    <a href='#' className='btn btn-success ' >Buy</a>
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