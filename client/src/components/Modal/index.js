import React, { useState, useEffect } from "react";
import "./modal.css";
import axios from "axios";
import { set } from "mongoose";
const BASE_URL = process.env.REACT_APP_API_URL;

const Modal = props => {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [okWithDogs, setokWithDogs] = useState(null);
  const [okWithCats, setokWithCats] = useState(null);
  const [okWithChild, setokWithChild] = useState(null);
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [bio, setbio] = useState('')

  const character = props.character

useEffect(()=> {
  setName(character.name)
  /*setAge(character.age) */
  setGender(character.gender)
  setokWithDogs(character.okwithdogs["0"])
  setokWithCats(character.okwithcats["0"])
  setokWithChild(character.okwithchild["0"])
 

},[])


  const handleText = (e) => {
    const text = e.target.value
    function jsUcfirst(string) {return string.charAt(0).toUpperCase() + string.slice(1); }
    const textUppercase= jsUcfirst(text)
    setName(textUppercase)
}

  const handleCheck = () => {
    setChecked(true)
    setChecked2(false)
    setGender("Mâle")
  }
  
  const handleCheck2 = () => {
    setChecked(false)
    setChecked2(true)
    setGender("Femelle")
  }
  
   const handleUpdate = async (e) => {
    /*  e.preventDefault(e) */
  
    await axios({
    method: "put",
    url: `${BASE_URL}api/user/${props.character._id}`,
    data: {name, age, gender, okwithcats: okWithCats, okwithdogs: okWithDogs, okwithchild: okWithChild, bio}
  }).then((res)=>{console.log('données modifiés')})
  .catch((err)=>console.log(err))

  }

  const handleDelete = async (e) => {
    /*  e.preventDefault(e) */
  
    await axios({
    method: "delete",
    url: `${BASE_URL}api/user/${props.character._id}`,
   
  }).then((res)=>{console.log('animal supprimé')})
  .catch((err)=>console.log(err))

  }

  const onClose = e => {
    props.onClose && props.onClose(e);
  };

  return (
    <div className="modal" id="modal">
    <h2>Edition</h2>
  
    <form onSubmit={handleUpdate}>
             
           
                 <label htmlFor="input1" className="form-check-label"> Prénom de l'animal </label>
                 <input
                 id="input1"
                  type="text"
                  value={name}
                  onChange={e => handleText(e)}
                  /> 
                  <br></br>
        
                 <input type="checkbox" checked={checked} className="form-check-input" id="char1" onChange={() => handleCheck()}/>        
                  <label htmlFor="char1" className="form-check-label"> Mâle </label>
            
                  <input type="checkbox" checked={checked2} className="form-check-input" id="char2" onChange={() => handleCheck2()}/>
                  <label htmlFor="char2" className="form-check-label"> Femelle </label>
                  <br></br>
                       
                 
                  <input type="checkbox" checked={okWithCats} className="form-check-input" id="char4" onChange={() => setokWithCats(!okWithCats)}/>
                  <label htmlFor="char4" className="form-check-label"> compatible avec les chats </label>
                  <br></br>
                  <input type="checkbox" checked={okWithDogs} className="form-check-input" id="char3" onChange={() => setokWithDogs(!okWithDogs)}/>
                  <label htmlFor="char3" className="form-check-label"> compatible avec les chiens </label>
                  <br></br>
                  <input type="checkbox" checked={okWithChild} className="form-check-input" id="char5" onChange={() => setokWithChild(!okWithChild)}/>
                  <label htmlFor="char5" className="form-check-label"> compatible avec les enfants </label>
                  <br></br>
                     

                  <label htmlFor="pet-select">Age de l'animal</label>
                  <select name="pets" id="pet-select" onChange={e => setAge(e.target.value)}>
                    <option value="">Select</option>
                      <option value="1 mois">1 mois</option>
                      <option value="2 mois">2 mois</option>
                      <option value="2 mois">3 mois</option>
                      <option value="4 mois">4 mois</option>
                      <option value="5 mois">5 mois</option>
                      <option value="6 mois">6 mois</option>
                      <option value="7 mois">7 mois</option>
                      <option value="8 mois">8 mois</option>
                      <option value="9 mois">9 mois</option>        
                      <option value="10 mois">10 mois</option>
                      <option value="11 mois">11 mois</option>
                      <option value="1 ans">1 ans</option>
                      <option value="2 ans">2 ans</option>
                      <option value="3 ans">3 ans</option>
                      <option value="4 ans">4 ans</option>
                      <option value="5 ans">5 ans</option>
                      <option value="6 ans">6 ans</option>
                      <option value="7 ans">7 ans</option>
                      <option value="8 ans">8 ans</option>
                      <option value="9 ans">9 ans</option>
                      <option value="10 ans">10 ans</option>
                      <option value="11 ans">11 ans</option>
                      <option value="12 ans">12 ans</option>
                  </select>
                  <br></br>
                  <label htmlFor="textarea-1">Informations</label>
                  <input id="textarea-1" type="textarea" onChange={e => setbio(e.target.value)}></input>
                <button type="submit">Ajouter</button>
          </form> 

          <button onClick={(e)=> handleDelete(e)}>Supprimer</button>
    <div className="actions">
 
      <button className="toggle-button" onClick={(e)=> onClose(e)}>
        close
      </button>
    </div>
  </div>
  );
};

export default Modal;