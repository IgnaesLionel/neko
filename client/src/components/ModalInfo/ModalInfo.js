import React from "react";
import "./modalInfo.css";


const ModalInfo = (props) => {

  const onClose = e => {
    props.onClose && props.onClose(e);
  };


  return (
    <div className="modal" id="modal">
      <p> Bonjour à tous ! je m'appelle {props.character.name}, je suis {props.character.gender==="Mâle" ? "un mâle" : "une femelle"} de {props.character.age}</p>
      <br/>
      <p>{props.character.bio}</p>

      <button className="toggle-button" onClick={(e) => onClose(e)}>
          close
      </button>
    </div>

  );
};

export default ModalInfo;