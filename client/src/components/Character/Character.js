import React, {useContext,useState} from 'react';
import ImageComponent from '../ImageComponents/ImageComponents';
import { UidContext } from "../AppContext";
import Modal from "../Modal/Modal";

const Character = (props) => {
    
    let character = props.character 
 
    //context de auth/login
    const uid = useContext(UidContext);

    const [openModel, setOpenModel]= useState('false');//modal
 
    return (  
       
        <div className="character" style={ character.gender === "Mâle" ? { background:'#a0c4ff', borderColor: '#0096c7'} : {background : "#E070AC"} }  >
            <h2>{character.name}  </h2>   
           <h3>       {uid ? <div className="pen" style={{ background:"white"}} onClick={()=>setOpenModel(!openModel)}> 🖊️ </div> : null}
            {openModel===true ?  <Modal onClose={()=>setOpenModel(!openModel)} show={openModel} character={character}></Modal> : null} </h3>
       
            <div className="pix" style={ character.gender === "Mâle" ? { borderColor: '#0096c7'} : { borderColor: '#e3007a'} }  >
            <div className="photo">
                <ImageComponent  image={character.picture} alt={character.name} content={character.content}/>
            </div>
            </div>
          
            <span>{character.gender}</span>
            <span>Age : {character.age}</span>
            <div className="infos">
            <span> {character.okwithcats[0]===true ? <span style={{ background:"green"}}>😺</span> : <span style={{ background: "red"}}>😺</span>}</span>
            <span> {character.okwithdogs[0]===true ?  <span style={{ background:"green"}}>🐶</span> : <span style={{ background: "red"}}>🐶</span>}</span>
            <span> {character.okwithchild[0]===true ?  <span style={{ background:"green"}}>👧</span> : <span style={{ background: "red"}}>👧</span>}</span>
         
         
            </div>

       </div>
    );
};

export default Character;