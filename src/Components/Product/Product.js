import React, {Component} from 'react';

class Product extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                (Product)
                <h1>{this.props.name}</h1>
                <h2>{this.props.price}</h2>
                <img src={this.props.img}/>
            </div>
        )
    }
}

export default Product