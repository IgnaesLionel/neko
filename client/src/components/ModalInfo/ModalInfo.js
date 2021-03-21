import React from "react";
import "./modalInfo.css";


const ModalInfo = (props) => {

  const onClose = e => {
    props.onClose && props.onClose(e);
  };


  return (
    <div className="modal" id="modal">
      <h2>{props.character.name} </h2>
      <br/>
      <p>{props.character.bio}</p>

      <button className="toggle-button" onClick={(e) => onClose(e)}>
          close
      </button>
    </div>

  );
};

export default ModalInfo;