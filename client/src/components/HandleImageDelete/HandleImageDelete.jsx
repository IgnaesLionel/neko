import React from 'react';
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const HandleImageDelete = (props) => { 

  const handleDelete = async (e) => {
  let filename = props.src.replace(/^.*[\\\/]/, '') //only filename on url
   await axios({
    method: "delete",
    url: `${API_URL}files/${filename}`,
  }).then((res) => {console.log('photo supprimé') })
    .catch((err) => console.log(err)) 
    console.log("ici")
    console.log(props.id)
    console.log(`${API_URL}api/user/removeimage/${props.id}`)
    await axios({
      method: "put",
      url: `${API_URL}api/user/removeimage/${props.id}/${filename}`,
      data: { mesData:"ok"  }
    }).then((res) => { console.log('données mise à jours') })
      .catch((err) => console.log(err)) 

  }


    return (
        <div>
            <img src={props.src} height={props.height} width={props.width}/>
            <button onClick={()=>handleDelete()}>supprimer</button>
        </div>
    )
}
export default HandleImageDelete



//découper pour avoir juste le nom de l'image -> /files/nom.jpg
//envoyer l'ID + nom de l'image

    /* 
    
    
  } */