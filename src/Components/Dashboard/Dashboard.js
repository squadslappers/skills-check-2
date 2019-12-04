import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component{
    constructor(props){
        super(props)

        this.deleteProduct=this.deleteProduct.bind(this)
    }

    deleteProduct(id){
        axios.delete(`api/inventory/${id}`)
            .catch(err=>{console.log(err)})
            console.log(id)
            this.props.getFN()
    }

    render(){
        return(
            <div>
                (Dashboard)
                {this.props.inventory.map((element, index) => {
                    return (
                        <Product
                            name={element.name}
                            price={element.price}
                            img={element.img}
                            id={element.id}
                            key={index}
                            deleteFN={this.deleteProduct}
                            editFN={this.props.editFN}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Dashboard