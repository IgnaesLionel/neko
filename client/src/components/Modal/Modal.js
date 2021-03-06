import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadFiles from "../../components/UploadFiles/upload-files.component";
import HandleImageDelete from "../../components/HandleImageDelete/HandleImageDelete";

const API_URL = process.env.REACT_APP_API_URL;

const Modal = props => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [okWithDogs, setokWithDogs] = useState('');
  const [okWithCats, setokWithCats] = useState('');
  const [okWithChild, setokWithChild] = useState('');
  const [bio, setBio] = useState('')
  const [gender, setGender] = useState('');
  const [picture, setPicture] = useState([]);
  const [availaBility, setAvailability] = useState('');
  const [data, setData] = useState(['data']);

  const character = props.character

  const handleText = (e) => {
    const text = e.target.value
    function jsUcfirst(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
    const textUppercase = jsUcfirst(text)
    setName(textUppercase)
  }

  const handleCheck = () => {
    setGender("Mâle")
  }

  const handleCheck2 = () => {
    setGender("Femelle")
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    await axios({
      method: "put",
      url: `${API_URL}api/user/${props.character._id}`,
      data: { name, age, gender, okwithcats: okWithCats, okwithdogs: okWithDogs, okwithchild: okWithChild, bio, availability: availaBility }
    }).then((res) => { console.log('données mise à jours') })
      .catch((err) => console.log(err))

  }

  const handleDelete = async (e) => {

    props.onClose && props.onClose(e);
    await axios({
      method: "delete",
      url: `${API_URL}api/user/${props.character._id}`,
    }).then((res) => { console.log('animal supprimé') })
      .catch((err) => console.log(err))
  }

  const onClose = e => {
    props.onClose && props.onClose(e);
  };

  useEffect(() => {

    axios({
      method: "get",
      url: `${API_URL}files`,
    }).then((res) => { setData(res.data) })
      .catch((err) => console.log(err))

    setName(character.name)
    setGender(character.gender)
    setAge(character.age)
    setokWithDogs(character.okwithdogs["0"])
    setokWithCats(character.okwithcats["0"])
    setokWithChild(character.okwithchild["0"])
    setBio(character.bio)
    setPicture(character.picture)
    setAvailability(character.availability["0"])

  }, [])

  return (
    <div className="modal" id="modal">

      <h3>{character.name}
        <button className="toggle-button-sup" onClick={(e) => { if (window.confirm('Etes-vous sure de vouloir effacer le chat ?')) { handleDelete(e) }; }} >Effacer le chat</button>
        <button className="toggle-button-close" onClick={(e) => onClose(e)}>
          fermer
</button> </h3>

      <form className="content">


        <label htmlFor="input1" className="form-check-label"> Prénom de l'animal </label>
        <input
          id="input1"
          type="text"
          value={name}
          onChange={e => handleText(e)}
        />
        <br></br>
        <input type="checkbox" checked={gender === "Mâle" ? true : false} className="form-check-input" id="char1" onChange={() => handleCheck()} />
        <label className="form-check-label"> Mâle </label>
        <input type="checkbox" checked={gender === "Femelle" ? true : false} className="form-check-input" id="char2" onChange={() => handleCheck2()} />
        <label className="form-check-label"> Femelle </label>
        <br></br>


        <label htmlFor="Cats">ok avec chats?</label>
        <select value={okWithCats} name="Cats" id="Cats-select" onChange={e => setokWithCats(e.target.value)}>
          <option value="idk"> Je ne sais pas</option>
          <option value="yes">oui</option>
          <option value="no">non</option>
        </select>
        <br />

        <label htmlFor="Dogs">ok avec chiens?</label>
        <select value={okWithDogs} name="Dogs" id="Dogs-select" onChange={e => setokWithDogs(e.target.value)}>
          <option value="idk"> Je ne sais pas</option>
          <option value="yes">oui</option>
          <option value="no">non</option>
        </select>
        <br />
        <label htmlFor="Child">ok avec enfants?</label>
        <select value={okWithChild} name="Child" id="Child-select" onChange={e => setokWithChild(e.target.value)}>
          <option value="idk"> Je ne sais pas</option>
          <option value="yes">oui</option>
          <option value="no">non</option>
        </select>
        <br />

        <input type="checkbox" checked={availaBility} className="form-check-input" id="char6" onChange={() => setAvailability(!availaBility)} />
        <label htmlFor="char6" className="form-check-label"> Disponible ?</label>
        <br></br>
        <label htmlFor="pet-select">Age de l'animal</label>
        <select name="pets" id="pet-select" onChange={e => setAge(e.target.value)}>
          <option value={age} defaultValue={age}>{age}</option>
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
        <span>Informations sur l'animal</span>
        <br />

        <textarea value={bio} id="textarea-1" rows="10" cols="20" onChange={e => setBio(e.target.value)}></textarea>
        <br></br>
        <br />

        <button className="toggle-button-update" onClick={(e) => handleUpdate(e)}>Enregistrer infos</button>

        <UploadFiles data={data} idCats={character._id} picture={picture} />





        {picture.map((image, k) => { return (<HandleImageDelete key={k} id={props.character._id} src={image} height="120" width="120" />) })}



      </form>

      <button className="toggle-button-close" onClick={(e) => onClose(e)}> fermer </button>
    </div>

  );
};

export default Modal;