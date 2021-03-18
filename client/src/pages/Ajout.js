import React, { useState } from "react";
import Navigation from '../components/Navigation/Navigation';
import axios from "axios";

import LogOut from "../components/Log/Logout";

const BASE_URL = process.env.REACT_APP_API_URL;

const Ajout = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Mâle');
  const [age, setAge] = useState('');
  const [okWithDogs, setokWithDogs] = useState(true);
  const [okWithCats, setokWithCats] = useState(true);
  const [okWithChild, setokWithChild] = useState(true);
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [bio, setbio] = useState('')
  const [availability, setAvailability] = useState(true)
  const [mypicture, setPicture] = useState("./uploads/profil/random-user.png")

  const handleText = (e) => {
    const text = e.target.value
    function jsUcfirst(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
    const textUppercase = jsUcfirst(text)
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

  const handleSubmit = async (e) => {
    /*  e.preventDefault(e) */

    await axios({
      method: "post",
      url: `${BASE_URL}api/user/registeranimal`,
      data: { name, age, gender, okwithcats: okWithCats, okwithdogs: okWithDogs, okwithchild: okWithChild, bio, picture: mypicture, availability:availability }
    }).then((res) => { console.log('données envoyés') })
      .catch((err) => console.log(err))

  }

  return (
    <div>
      <div>
        <Navigation />
        <LogOut/>
        <h1 className="h1-1"> Backdoor </h1>
        <form onSubmit={handleSubmit}>

          <label htmlFor="input1" className="form-check-label"> Nom de l'animal : </label>
          <input
            id="input1"
            type="text"
            value={name}
            onChange={e => handleText(e)}
          />
          <br />

          <input type="checkbox" checked={checked} className="form-check-input" id="char1" onChange={() => handleCheck()} />
          <label htmlFor="char1" className="form-check-label"> Mâle </label>
          <input type="checkbox" checked={checked2} className="form-check-input" id="char2" onChange={() => handleCheck2()} />
          <label htmlFor="char2" className="form-check-label"> Femelle </label>
          <br />
          <input type="checkbox" checked={okWithDogs} className="form-check-input" id="char3" onChange={() => setokWithDogs(!okWithDogs)} />
          <label htmlFor="char3" className="form-check-label"> compatible avec les chiens </label>
          <br />
          <input type="checkbox" checked={okWithCats} className="form-check-input" id="char4" onChange={() => setokWithCats(!okWithCats)} />
          <label htmlFor="char4" className="form-check-label"> compatible avec les chats </label>
          <br />
          <input type="checkbox" checked={okWithChild} className="form-check-input" id="char5" onChange={() => setokWithChild(!okWithChild)} />
          <label htmlFor="char5" className="form-check-label"> compatible avec les enfants </label>
          <br />

          <input type="checkbox" checked={availability} className="form-check-input" id="char5" onChange={() => setAvailability(!setAvailability)} />
          <label htmlFor="char6" className="form-check-label"> Je recherche une famille </label>
          <br />

          <label htmlFor="pet-select">Age de l'animal : </label>
          <select name="pets" id="pet-select" required onChange={e => setAge(e.target.value)}>
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
          <br />
          <label htmlFor="textarea-1">Histoire de l'animal : </label>
        
          <br />
          <textarea id="textarea-1" rows="12" cols="60" onChange={e => setbio(e.target.value)}></textarea>
          <button type="submit">Envoyer</button>
        </form>
        <br />
     
      </div>
    </div>
  );
};

export default Ajout;