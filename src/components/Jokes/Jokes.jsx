import React, { Component } from 'react';
import axios from "axios";

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jokesFromAPI: []
        };
        this.addJoke = this.addJoke.bind(this);
    
}
        componentDidMount(){
            this.addJoke();
        }

        
        async addJoke(){
            let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=5');
            console.log(response.data.setup);
            console.log(response.data.delivery);
            this.setState({
                jokesFromAPI: response.data
            })
        }


    render() { 
        return ( 
            this.state.jokesFromAPI.map(joke =>((
                <span>
                    <h1>{joke.setup}</h1>
                    <h1>{joke.delivery}</h1>    
                </span>
            ))
            
            ))
        }
    }
    
export default Jokes;