import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    console.log(this.props)
    let { id , name, price, category ,count,onSale} = this.props.productInfo;
    return (
        <>
        <div className='w-25 bg-white m-1 col-md-3'>
            <div className="bg-light p-1 position-relative">
                <h3>Child Component</h3>
                <h4>product name : {name}</h4>
                <h4>product price : {price}</h4>
                <h4>product category : {category}</h4>
                <h4>product count : {count}</h4>
                    <button className='btn btn-outline-danger w-100' onClick={() => this.props.delete(id)}>Delete</button>
            <button className='btn btn-outline-primary w-100' onClick={() => this.props.update(this.props.productInfo)}>+</button>
                    {onSale? <div className='sale bg-danger text-white position-absolute top-0 end-0 mx-1'>sale </div>:''}
                    
            </div>
            
        </div>
    </>
    )
  }
}
