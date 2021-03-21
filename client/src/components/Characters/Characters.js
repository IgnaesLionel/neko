import React from 'react';
import Character from '../Character/Character';

const Characters = (props) => {

    const rows = []


    //filtre
    props.data.forEach(character => {
  {console.log(character)}
        if (props.availability && !character.availability[0]) { return }

        if (!props.availability && character.availability[0]) { return }

  
        if (props.maleGender && character.gender !== "Mâle") {
            return
        }  // si la selection male est true mais que le character n'est pas un male, ne laisse pas passer
        if (props.femaleGender && character.gender !== "Femelle") {
            return
        } // si la selection femelle est true mais que le character n'est pas une femelle,  ne laisse pas passer
        if (character.name.indexOf(props.filterText) === -1) { // si ce qui est tapé n'est pas le debut de l'article, return et ne laisse pas passer
            return
        }

        rows.push(character)  //envoie ce qui reste
    })



    return (

        <div className="characters">
           
            {rows.map((character, k) => { return (<Character key={k} character={character} />) })}
        </div>
    );
};

export default Characters;