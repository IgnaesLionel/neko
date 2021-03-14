import React, {useContext,useState} from 'react';
import ImageComponent from '../ImageComponents/ImageComponents';
import { UidContext } from "../AppContext";
import Modal from "../Modal";

const Character = (props) => {
    
    let character = props.character 
 
    const uid = useContext(UidContext);

    const [toggleCat, setToggleCat]= useState('false');
 
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
            <span> {character.okwithcats ? <span style={{ background:"green"}}>😺</span> : <span style={{ background: "red"}}>😺</span>}</span>
            <span> {character.okWithdogs ?  <span style={{ background:"green"}}>🐶</span> : <span style={{ background: "red"}}>🐶</span>}</span>
            <span> {character.okWithchild ?  <span style={{ background:"green"}}>👧</span> : <span style={{ background: "red"}}>👧</span>}</span>
            {uid ? <h4 className="pen" style={{ background:"white"}} onClick={()=>setToggleCat(!toggleCat)}> 🖊️ </h4> : null}
            {toggleCat==true ?  <Modal onClose={()=>setToggleCat(!toggleCat)} show={toggleCat} character={character}></Modal> : null}


           


            </div>



       </div>
    );
};

export default Character;