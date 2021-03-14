import React, {useContext} from 'react';
import Character from '../Character/Character';
import { UidContext } from "../AppContext";

const Characters = (props) => {

const rows = []

const uid = useContext(UidContext);

    props.data.forEach(character => {
        if (props.maleGender && character.gender !== "Mâle"){
            return}  // si la selection male est true mais que le character n'est pas un homme, ne return rien
        if (props.femaleGender && character.gender !== "Femelle"){
               return} // si la selection femele est true mais que le character n'est pas une femme, ne return rien
        if (character.name.indexOf(props.filterText) === -1){ // si ce qui est tapé n'est pas le debut de l'article, return et pas de push
            return
        }
       
        rows.push(character)  //envoies tous les articles
    } )



    return (
       
        <div className="characters"> 
        {uid ? <h1> LOGGED </h1> : <h1>not logged</h1>}
   
        {rows.map((character,k) => {return (<Character key={k} character={character}/>)})}      
        </div>
    );
};

export default Characters;