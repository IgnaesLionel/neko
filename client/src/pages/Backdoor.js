import Navigation from '../components/Navigation/Navigation';
import axios from "axios";
import React, { useState } from "react";
const BASE_URL = process.env.REACT_APP_API_URL;

const Backdoor = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState('');
  const [okWithDogs, setokWithDogs] = useState(true);
  const [okWithCats, setokWithCats] = useState(true);
  const [okWithChild, setokWithChild] = useState(true);
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [bio, setbio] = useState('blabla')

  const handleCheck = () => {
    setChecked(true)
    setChecked2(false)
    setGender("Male")
  }
  
  const handleCheck2 = () => {
    setChecked(false)
    setChecked2(true)
    setGender("Femelle")
  }
  
  console.log(`${BASE_URL}api/user/register`)

   const handleSubmit = async (e) => {
     e.preventDefault(e)
     console.log(BASE_URL)
    await axios({
    method: "post",
    url: `${BASE_URL}api/user/register`,
    data: {name, age, gender, okWithCats, okWithDogs, okWithChild, bio}
  }).then((res)=>{console.log('ok')})
  .catch((err)=>console.log(err))

  }


  
 
  return (
    <div>
          <div>
            <Navigation/>
            <h1 className="h1-1"> Backdoor </h1>       
             <form onSubmit={handleSubmit}>
              
                 <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                /> 
        
           <input type="checkbox" checked={checked} className="form-check-input" id="char1" onChange={() => handleCheck()}/>        
                  <label htmlFor="char1" className="form-check-label"> Mâle </label>
            
                  <input type="checkbox" checked={checked2} className="form-check-input" id="char2" onChange={() => handleCheck2()}/>
                  <label htmlFor="char2" className="form-check-label"> Femelle </label>
                  <br></br>
                       
                  <input type="checkbox" checked={okWithDogs} className="form-check-input" id="char3" onChange={() => setokWithDogs(!okWithDogs)}/>
                  <label htmlFor="char3" className="form-check-label"> compatible avec les chiens </label>
                  <br></br>
                  <input type="checkbox" checked={okWithCats} className="form-check-input" id="char4" onChange={() => setokWithCats(!okWithCats)}/>
                  <label htmlFor="char4" className="form-check-label"> compatible avec les chats </label>
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
                <button type="submit">Submit</button>
          </form> 
            </div>
    </div>
  );
};

export default Backdoor;

/* class Backdoor extends 
Component {

  constructor (props){
    super(props)
    this.handleMaleGender = this.handleMaleGender.bind(this);
    this.handleFemaleGender = this.handleFemaleGender.bind(this);
    this.handleOkWithDogs = this.handleOkWithDogs.bind(this);
    this.handleOkWithCats = this.handleOkWithCats.bind(this);
    this.handleOkWithChild = this.handleOkWithChild.bind(this);
    this.handleUploadedImage = this.handleUploadedImage.bind(this);
    console.log(this.props)
}

    state = {
      response: '',
      name: '',
      maleGender: true,
      femaleGender: false,
      gender: 'Mâle',
      age: '',
      okWithDogs: true,
      okWithCats: true,
      okWithChild: true,
      uploadedFile: null,
      filename: '',
      responseToPost: '',
    };
    
    handleMaleGender(e){
    this.setState({ femaleGender: false })
    this.setState({ maleGender: true })
    this.setState({ gender: 'Mâle'})
  }

  handleFemaleGender(e){
    this.setState({ femaleGender: true })
    this.setState({ maleGender: false })
    this.setState({ gender: 'Femelle'})
  }

  handleOkWithDogs(e){
    this.setState(prevState => ({
      okWithDogs: !prevState.okWithDogs
    }));
  }

  handleOkWithCats(e){
    this.setState(prevState => ({
      okWithCats: !prevState.okWithCats
    }));
  }
 
  handleOkWithChild(e){
    this.setState(prevState => ({
      okWithChild: !prevState.okWithChild
    }));
  }

  handleUploadedImage (filename) {
    this.setState({filename})
}

  send = event => {
    console.log(event)
  }
    /* GET METHOD */
/*     componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
      const response = await fetch('/api/hello');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      
      return body;
    };
     */
    /* POST METHOD */
 /*    handleSubmit = async e => {
      e.preventDefault();
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: this.state.name, age: this.state.age, gender: this.state.gender, okWithDogs : this.state.okWithDogs, okWithCats : this.state.okWithCats, okWithChild : this.state.okWithChild, url : this.state.filename}),
      });
      const body = await response.text();
   
      this.setState({ responseToPost: body });
    };

    render() {
        return (
            <div>
            <Navigation/>
            <h1 className="h1-1"> Backdoor </h1>       
            <p> reponse {this.state.response} </p>
            <p> name file {this.state.filename}</p>
              <form onSubmit={this.handleSubmit}>
                <p>
                  <strong>Nom de l'animal:</strong>
                </p>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
                  <br></br>
                  <input type="checkbox" checked={this.state.maleGender} className="form-check-input" id="char1" onChange={this.handleMaleGender}/>
                  
                  <label htmlFor="char1" className="form-check-label"> Mâle </label>
                  <input type="checkbox" checked={this.state.femaleGender} className="form-check-input" id="char2" onChange={this.handleFemaleGender}/>
                  <label htmlFor="char2" className="form-check-label"> Femelle </label>
                  <br></br>
                  <input type="checkbox" checked={this.state.okWithDogs} className="form-check-input" id="char3" onChange={this.handleOkWithDogs}/>
                  <label htmlFor="char3" className="form-check-label"> compatible avec les chiens </label>
                  <br></br>
                  <input type="checkbox" checked={this.state.okWithCats} className="form-check-input" id="char4" onChange={this.handleOkWithCats}/>
                  <label htmlFor="char4" className="form-check-label"> compatible avec les chats </label>
                  <br></br>
                  <input type="checkbox" checked={this.state.okWithChild} className="form-check-input" id="char5" onChange={this.handleOkWithChild}/>
                  <label htmlFor="char5" className="form-check-label"> compatible avec les enfants </label>
                  <br></br>
                  <label htmlFor="pet-select">Age de l'animal</label>
                  <select name="pets" id="pet-select" onChange={e => this.setState({ age: e.target.value })}>
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
                <button type="submit">Submit</button>
              </form>
          <p>{this.state.responseToPost}</p>

<h4>état de response {this.state.response}</h4>
<h4>état de responseTopost {this.state.responseToPost}</h4>
<h4> image{this.state.uploadedFile}</h4>

 <FileUpload  onUploadedImage={this.handleUploadedImage} />
            </div>
        );
    }
}

export default Backdoor;

 */