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
                <button
                    onClick={()=>this.props.deleteFN(this.props.id)}>
                    Delete</button>
                <button
                    onClick={()=>this.props.editFN(this.props.id, this.props.name, this.props.price, this.props.img)}>
                    Edit</button>
            </div>
        )
    }
}

export default Product