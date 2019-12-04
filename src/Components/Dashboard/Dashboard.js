import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component{
    constructor(props){
        super(props)
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
                            key={index}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Dashboard