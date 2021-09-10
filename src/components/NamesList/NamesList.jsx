import React from 'react';

const NamesList = (props) => {
    return ( 
        <ul>
            {props.names.map(function(name, index){
                return <li key={index}>{name}</li>
            })}
        </ul>
     );
}
 
export default NamesList;