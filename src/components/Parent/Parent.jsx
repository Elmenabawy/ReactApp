import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
    state={
        Products: [{
            id: "0",
            name: "Toshipa",
            price: "15200",
            category: "tv",
            count: "3",
            onSale: true,
        },
            {
                id: "1",
                name: "samsung",
                price: "15200",
                category: "tv",
                count: "3",
                onSale: true,
            },
            {
                id: "2",
                name: "iphone",
                price: "15200",
                category: "tv",
                count: "3",
                onSale: true,
            },
            {
                id: "3",
                name: "Toshipa",
                price: "15200",
                category: "tv",
                count: "3",
                onSale: false,
            },
            {
                id: "4",
                name: "oppo",
                price: "15200",
                category: "tv",
                count: "3",
                onSale: false,
            },
            {
                id: "5",
                name: "ayhaga",
                price: "15200",
                category: "tv",
                count: "3",
                onSale: true,
            },
    ]
    };

    deleteProduct = (id)=> {
        console.log(id);
    };
 
  render() {
    return (<>
        <div className="container bg-dark py-4 ">
            
            <div className='row g-1'>
                {this.state.Products.map((product)=> <Child delete={this.deleteProduct} productInfo={product} />)}
            </div>
        </div>
    
    </>)
  }
}
