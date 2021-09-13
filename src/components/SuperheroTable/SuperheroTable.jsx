import React from 'react';
import './SuperheroTable.css'

const SuperheroTable = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
                </tr>
            </thead>
            <tbody>
                {props.superheroes.map(superhero =>(
                    <tr key={superhero.superheroID}>
                        <td>{superhero.name}</td>
                        <td>{superhero.primaryAbility}</td>
                        <td>{superhero.secondarAbility}</td>
                    </tr>
                    
                ))}
            </tbody>

        </table>
     );
}
 
export default SuperheroTable;