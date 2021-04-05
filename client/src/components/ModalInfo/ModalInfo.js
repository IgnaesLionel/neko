import React from "react";
import "./modalInfo.css";


const ModalInfo = (props) => {

  const onClose = e => {
    props.onClose && props.onClose(e);
  };

const character = props.character
const {gender, name, availability, bio, age} = character
  return (
    <div className="modal" id="modal" style={character.gender === "Mâle" ? { background: 'rgb(160, 196, 255)', borderColor: '#0096c7' } : { background: "rgb(204, 112, 172)" }}>
      <p> Bonjour à tous ! je m'appelle {name}, je suis {gender==="Mâle" ? "un mâle" : "une femelle"} de {age}.</p>
      <p> {availability[0]===true ? "Je recherche actuellement une famille pour m'adopter" : null}</p>
      <p> {availability[0]===false && gender==="Mâle" ? "J'ai déja trouvé ma famille grâce à l'association Neko !" : null}</p>
      <p> {availability[0]===false && gender==="Femelle" ? "J'ai déja trouvée ma famille grâce à l'association Neko !" : null}</p>
      <br/>
      <p>{bio}</p>
      <br/>
      <p> {availability[0]===true ? "Contactez l'association au 06.82.45.15.83 pour avoir plus d'information! A bientôt !" : null}</p>
      <button className="toggle-button-bio-close" onClick={(e) => onClose(e)}>
          fermer
      </button>
    </div>

  );
};

export default ModalInfo;