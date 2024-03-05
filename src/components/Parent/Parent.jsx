import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
    state={
        Products: [{
            id: "0",
            name: "Toshipa",
            price: "15200",
            category: "tv",
            count: 3,
            onSale: true,
        },
            {
                id: "1",
                name: "samsung",
                price: "15200",
                category: "tv",
                count: 4,
                onSale: true,
            },
            {
                id: "2",
                name: "iphone",
                price: "15200",
                category: "tv",
                count: 3,
                onSale: true,
            },
            {
                id: "3",
                name: "Toshipa",
                price: "15200",
                category: "tv",
                count: 5,
                onSale: false,
            },
            {
                id: "4",
                name: "oppo",
                price: "15200",
                category: "tv",
                count: 3,
                onSale: false,
            },
            {
                id: "5",
                name: "ayhaga",
                price: "15200",
                category: "tv",
                count: 7,
                onSale: true,
            },
    ]
    };

    deleteProduct = (id)=> {
        //deep copy not sahllow copy
        let myProducts = [...this.state.Products];
        //update
        myProducts = myProducts.filter((product)=>product.id !== id);
        //render
        this.setState({Products:myProducts});
    };

    updateProduct = (product)=>{
        //shallow copy
        let myProducts = [...this.state.Products];  
        //get the product index
        let productIndex = myProducts.indexOf(product);
        myProducts[productIndex].count = myProducts[productIndex].count + 1;
        this.setState({Products:myProducts})
    }
 
  render() {
    return (<>
        <div className="container bg-dark py-4 ">
            
            <div className='row g-1'>
                {this.state.Products.map((product)=> <Child delete={this.deleteProduct} productInfo={product} update={this.updateProduct}/>)}
            </div>
        </div>
    
    </>)
  }
}
