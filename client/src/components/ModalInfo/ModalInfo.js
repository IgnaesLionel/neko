import React from "react";
import "./modalInfo.css";


const ModalInfo = (props) => {

 

  return (
    <div className="modal" id="modal">
      <h2>{props.character.name} </h2>
      <br/>
      <p>{props.character.bio}</p>
    </div>

  );
};

export default ModalInfo;