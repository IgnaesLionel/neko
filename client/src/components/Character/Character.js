import React, { useContext, useState } from 'react';
import ImageComponent from '../ImageComponents/ImageComponents';
import { UidContext } from "../AppContext";
import Modal from "../Modal/Modal";

const Character = (props) => {

    let character = props.character

    //context de auth/login
    const uid = useContext(UidContext);

    const [openModel, setOpenModel] = useState('false');//modal

    return (

        <div className="character" style={character.gender === "Mâle" ? { background: '#a0c4ff', borderColor: '#0096c7' } : { background: "#E070AC" }}  >

            <span className="name"> {character.name}  </span>

            <div className="pix" style={character.gender === "Mâle" ? { borderColor: '#0096c7' } : { borderColor: '#e3007a' }}  >
                <div >
                    <ImageComponent image={character.picture} alt={character.name} content={character.content} />
                </div>
            </div>



            <p className="bio"> {character.bio}</p>


            <span>{character.gender}</span>
            <span>Age : {character.age}</span>
            <div className="infos">
                <span> {character.okwithcats[0] === true ? <span style={{ background: "green" }}>😺</span> : <span style={{ background: "red" }}>😺</span>}</span>
                <span> {character.okwithdogs[0] === true ? <span style={{ background: "green" }}>🐶</span> : <span style={{ background: "red" }}>🐶</span>}</span>
                <span> {character.okwithchild[0] === true ? <span style={{ background: "green" }}>👧</span> : <span style={{ background: "red" }}>👧</span>}</span>
                <span>       {uid ? <div className="pen" style={{ background: "white" }} onClick={() => setOpenModel(!openModel)}> <button>🖊️</button> </div> : null}</span>


            </div>
            {openModel === true ? <Modal onClose={() => setOpenModel(!openModel)} show={openModel} character={character}></Modal> : null}
        </div>
    );
};

export default Character;