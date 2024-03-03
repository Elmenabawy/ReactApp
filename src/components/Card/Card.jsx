import React, { Component } from 'react'
import './Card.css';
import Home from '../Home/Home';
export default class Card extends Component {
    state={
        name:"Soso",
        age:"18",
        bloodType:"A+",
    }
  render() {
    return( 
    <>
    <div className='border-3 border-black rounded-3 border p-3 text-center my-card'>
        <img src="images/pexels-photo-774909.jpeg" alt="card" className='img-fluid w-50'  />
        <h2>my name is {this.state.name}</h2>
        <h3>i`m {this.state.age}</h3>
        <h3>my Blood type is {this.state.bloodType} </h3>
                <div className='d-flex justify-content-between bg-primary'>
            <p>Card 1</p>
            <span>
                <i className='fa-brands fa-facebook'></i>
            </span>
        </div>
    </div>
    </>
    )
    }
}
