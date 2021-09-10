import React, { Component } from 'react';
class displayName extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            firstName: '',
            lastName: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
           [event.target.name]: event.target.value
        });

    }
handleSubmit = (event) => {
    event.preventDefault();
    alert(`First Name: ${this.state.firstName} Last Name: ${this.state.lastName}`)
    
    

}

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                <label>Last Name</label>
                <input name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                <button type="submit">Submit</button>
            </form>
         );
       
        }
    }

 
export default displayName;