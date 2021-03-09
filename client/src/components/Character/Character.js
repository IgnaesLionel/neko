import React from 'react';
import ImageComponent from '../ImageComponents/ImageComponents';


const Character = (props) => {
    /* console.log(props) -> 1 child*/
    let character = props.character //destructuring
    /* console.log(props.character) <-> console.log(character) */

    return (  
        <div className="character" style={ character.gender == "Mâle" ? { background:'#a0c4ff', borderColor: '#0096c7'} : {background : "#E070AC"} }  >


            <h2>{character.name}</h2>
            <div className="pix" style={ character.gender == "Mâle" ? { borderColor: '#0096c7'} : { borderColor: '#e3007a'} }  >
            <div className="photo">
                <ImageComponent  image={character.picture} alt={character.name} content={character.content}/>
            </div>
            </div>
          
            <span>{character.gender}</span>
            <span>Age : {character.age}</span>
            <div className="infos">
                <br></br>
            <span> {character.okwithcats ? <span style={{ background:"green"}}>😺</span> : <span style={{ background: "red"}}>😺</span>}</span>
            <span> {character.okWithdogs ?  <span style={{ background:"green"}}>🐶</span> : <span style={{ background: "red"}}>🐶</span>}</span>
            <span> {character.okWithchild ?  <span style={{ background:"green"}}>👧</span> : <span style={{ background: "red"}}>👧</span>}</span>
            </div>



       </div>
    );
};

export default Character;