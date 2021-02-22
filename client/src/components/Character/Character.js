import React from 'react';

const Character = (props) => {
    /* console.log(props) -> 1 child*/
    let character = props.character //destructuring
    /* console.log(props.character) <-> console.log(character) */

    return (  
        <div className="character">
            <h2>{character.name}</h2>
            <div className="pix">
            <img className="photo" src={character.url} alt={character.name}/>
            </div>
            <span>Sexe : {character.gender}</span>
            <span>Age : {character.age}</span>
       </div>
    );
};

export default Character;