import React, {Component} from "react";
import './App.css'
import DisplayName from './DisplayName/DisplayName';
import NamesList from "./NamesList/NamesList";

import SuperheroTable from "./SuperheroTable/SuperheroTable";
import SuperheroCreateForm from "./SuperheroCreateForm/SuperheroCreateForm";
import Jokes from "./Jokes/Jokes";



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: [' Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes : [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ]
            
        };
    }


    //Alert user
    alertUser = () =>{
        alert("devCodeCamp");
    }

    createSuperhero = (newHero) =>{
        debugger;
        let tempSuperheroes = this.state.superheroes;
        tempSuperheroes.push(newHero);
        this.setState({
            superheroes: tempSuperheroes
        });
    }



    



    render(){
        return(
            <div className="container-fluid">
            <h1>React Worksheet</h1>
            <DisplayName />
            <NamesList names = {this.state.names} />
            <button onClick ={this.alertUser}>test</button>
            {/* <AlertUser userAlert = {this.alertUser}/> */}
            <SuperheroTable superheroes = {this.state.superheroes} />
            <SuperheroCreateForm createSuperhero={this.createSuperhero}/>
            <Jokes />
            </div>

        )
    }    
}

export default App;