import React, { Component } from 'react';
import './SuperheroCreateForm.css'

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            superheroID: '',
            name: '',
            primaryAbility: '',
            secondarAbility: ''

         }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.createSuperhero(this.state)
    }


    render() { 
        return ( 
            <form onSubmit = {this.handleSubmit}>
                <label>Superhero ID:</label>
                <input name="superheroID" onChange={this.handleChange} value ={this.state.superheroID} /><br/>
                <label>Name:</label>
                <input name="name" onChange={this.handleChange} value ={this.state.name} /><br/>
                <label>primaryAbility:</label>
                <input name="primaryAbility" onChange={this.handleChange} value ={this.state.primaryAbility} /><br/>
                <label>secondarAbility:</label>
                <input name="secondarAbility" onChange={this.handleChange} value ={this.state.secondarAbility} /><br/>
                <button type="submit">Create Superhero</button>
            </form>
         );
    }
}
 
export default SuperheroCreateForm;