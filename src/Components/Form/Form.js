import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            image:'',
            name:'',
            price:'',
            currentProductID: null
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleSaveEdit=this.handleSaveEdit.bind(this);
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentProduct!==this.props.currentProduct){
            this.setState({
                image: this.props.currentProduct.image,
                name: this.props.currentProduct.name,
                price: this.props.currentProduct.price,
                currentProductID: this.props.currentProduct.id
            })
        }
    }

    handleChange(e){
        let {value,name} = e.target;

        this.setState({
            [name]:value
        })
        console.log(this.state)
    }

    handleSubmit(){
        console.log(this.state)
        axios.post('/api/product',this.state)
            .then(res => {
                this.setState({
                    image:'',
                    name:'',
                    price:''
                })
            })
            console.log(this.state)
        this.props.getFN()
    }

    cancel = () => {
        this.setState({
            image: '',
            name:'',
            price:'',
            currentProductID: null
        })
    }

    handleSaveEdit(id, body){
        axios.put(`/api/product/${id}`, body)
            .then(res => {
                this.setState({
                    image: '',
                    name: '',
                    price:''
                })
            })
        this.props.getFN()
    }

    render(){
        return(
            <div>
                Form Component
                <input 
                    name='image'
                    onChange={this.handleChange}
                    placeholder='image'
                    autoComplete='off'/>
                <input 
                    name='name'
                    onChange={this.handleChange}
                    placeholder='name'
                    autoComplete='off'/>
                <input 
                    name='price'
                    onChange={this.handleChange}
                    placeholder='price'
                    autoComplete='off'/>
                <button
                    onClick={this.cancel}>
                    Cancel</button>
                {this.state.currentProductID === null ? 
                    <button
                        onClick={this.handleSubmit}>
                        Add to Inventory</button>
                    :
                    <button
                        onClick={()=>this.handleSaveEdit()}>
                        Save Changes</button>
                }
            </div>
        )
    }
}

export default Form