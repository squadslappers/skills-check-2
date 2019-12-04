import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            image:'',
            product:'',
            price:''
        }
    this.handleChange=this.handleChange.bind(this);
    this.handleInput=this.handleInput.bind(this);
    }

    handleChange(e){
        let {value,name} = e.target;

        this.setState({
            [name]:value
        })
        console.log(this.state)
    }

    handleInput(){
    // ======== this function is supposed to clear the input fields ======== (Part 1, Step 1)
        this.setState({
            image:'',
            product:'',
            price:''
        })
        console.log(this.state);
    }

    render(){
        return(
            <div>
                Form Component
                <input 
                    name='image'
                    onChange={this.handleChange}
                    autoComplete='off'/>
                <input 
                    name='product'
                    onChange={this.handleChange}
                    autoComplete='off'/>
                <input 
                    name='price'
                    onChange={this.handleChange}
                    autoComplete='off'/>
                <button
                    onClick={this.handleInput}>
                    Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form