import React, { useContext, useState } from 'react';
import ImageComponent from '../ImageComponents/ImageComponents';
import { UidContext } from "../AppContext";
import Modal from "../Modal/Modal";
import ModalInfo from "../ModalInfo/ModalInfo";

const Character = (props) => {
    let character = props.character
    //context de auth/login
    const uid = useContext(UidContext);
    const [openModel, setOpenModel] = useState('false');//modal
    const [openModelInfo, setOpenModelInfo] = useState('false');//modal

    const style1 = {
        border: '2px solid rgba(0, 0, 0, 0.05)',
        borderColor: "#7FFF00",
        background: "green",
        borderRadius: "40px",
        margin: "0  5px"
    }

    const style2 = {
        border: '2px solid rgba(0, 0, 0, 0.05)',
        borderColor: "red",
        background: "#B22222",
        borderRadius: "40px",
        margin: "0  5px"
    };


    return (
        <div className="character" style={character.gender === "Mâle" ? { background: '#a0c4ff', borderColor: '#0096c7' } : { background: "#E070AC" }}  >
            <span className="name"> {character.name}  {uid ? <div className="pen" onClick={() => setOpenModel(!openModel)}> <button>🖊️</button> </div> : null} </span>
            <div className="pix" style={character.gender === "Mâle" ? { borderColor: '#0096c7' } : { borderColor: '#e3007a' }}  >

                <ImageComponent image={character.picture} alt={character.name} content={character.content} />

            </div>

            <div className="infos">
                <span>{character.age}</span>
                {character.okwithcats[0] === true ? <div className="plusinfo"><span style={style1}>😺<div class="infobulle2">Cohabitation facile avec les chats</div></span></div> : <div className="plusinfo"><span style={style2}>😺<div class="infobulle2">Cohabitation déconseillée avec les chats</div></span></div>}
                {character.okwithdogs[0] === true ?  <div className="plusinfo"><span style={style1}>🐶<div class="infobulle2">Cohabitation facile avec les chiens</div></span></div> : <div className="plusinfo"><span style={style2}>🐶<div class="infobulle2">Cohabitation déconseillée avec les chiens</div></span></div>}
                {character.okwithchild[0] === true ?  <div className="plusinfo"><span style={style1}>👧<div class="infobulle2">Cohabitation facile avec les enfants</div></span></div> : <div className="plusinfo"><span style={style2}>👧<div class="infobulle2">Cohabitation déconseillée avec les enfants</div></span></div>}
                <div className="pen" onClick={() => setOpenModelInfo(!openModelInfo)}> <div className="plusinfo">❔<div class="infobulle">cliquez pour plus d'info !</div></div> </div>
                {openModel === true ? <Modal onClose={() => setOpenModel(!openModel)} show={openModel} character={character}></Modal> : null}

                {openModelInfo === true ? <ModalInfo onClose={() => setOpenModelInfo(!openModelInfo)} show={openModelInfo} character={character}></ModalInfo> : null}
               
            </div>

        </div>
    );
};

export default Character;