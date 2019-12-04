import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            inventory:[
                {
                    name: 'dora',
                    price: 400,
                    img: 'http://web.colby.edu/cogblog/files/2014/05/Dora-The-Explorer.jpg'
                },
                {
                    name: 'boots',
                    price: 2,
                    img: 'http://web.colby.edu/cogblog/files/2014/05/Dora-The-Explorer.jpg'
                }
            ]
        }
    }
    render(){
        return(
            <div className="App">
            <Dashboard 
                inventory={this.state.inventory}/>
            <Form />
            <Header />
        </div>
        )
    }
}

export default App;
