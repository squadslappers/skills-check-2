import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            inventory:[],
            currentProduct:{
                id: null,
                name: '',
                price: null,
                image: ''
            }
        }
        this.getProducts=this.getProducts.bind(this)
        this.edit=this.edit.bind(this);
    }

    getProducts(){
        axios.get('/api/inventory')
            .then(res => {
                    this.setState({
                        inventory: res.data
                    })
            })
    }

    componentDidMount(){
        this.getProducts()
    }

    edit(id, name, price, image){
        this.setState({
            currentProduct: {
                id: id,
                name: name,
                price: price,
                image: image
            }
        })
        console.log(this.state.currentProduct)
    }

    render(){
        return(
            <div className="App">
            <Form 
                currentProduct={this.state.currentProduct}
                getFN={this.getProducts}/>
            <Dashboard 
                inventory={this.state.inventory}
                getFN={this.getProducts}
                editFN={this.edit}/>
            <Header />
        </div>
        )
    }
}

export default App;
