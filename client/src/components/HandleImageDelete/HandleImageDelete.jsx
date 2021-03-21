import React from 'react';
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const HandleImageDelete = (props) => {

  const handleDelete = async (e) => {
    let filename = props.src.replace(/^.*[\\\/]/, '') 
      await axios({
      method: "delete",
      url: `${API_URL}files/${filename}`,
    }).then((res) => { console.log('photo supprimé') })
      .catch((err) => console.log(err))

    
    await axios({
      method: "put",
      data: {},
      url: `${API_URL}api/user/removeimage/${props.id}/${filename}`,
    }).then((res) => { console.log('données mise à jours') })
      .catch((err) => console.log(err))

  }


  return (
    <div>
      <img src={props.src} height={props.height} width={props.width} alt={"cat"}/>
      <button onClick={() => handleDelete()}>supprimer</button>
    </div>
  )
}
export default HandleImageDelete
