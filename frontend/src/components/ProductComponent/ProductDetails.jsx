import React, { Component } from 'react';

class ProductDetails extends Component {
    state = { 
        product:{}
     }

     componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
    }

    render() { 
        return ( <h1>In details</h1> );
    }
}
 
export default ProductDetails;