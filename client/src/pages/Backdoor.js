import Navigation from '../components/Navigation/Navigation';
import React, { Component } from 'react';

class Backdoor extends 
Component {

  constructor (props){
    super(props)
    this.handleMaleGender = this.handleMaleGender.bind(this);
    this.handleFemaleGender = this.handleFemaleGender.bind(this);
}

    state = {
      response: '',
      name: '',
      maleGender: true,
      femaleGender: false,
      age: '',
      okWithDogs: true,
      okWithCats: true,
      okWithChild: true,
      responseToPost: '',
    };
    
    handleMaleGender(e){
    this.setState({ femaleGender: false })
    this.setState({ maleGender: true })
  }

  handleFemaleGender(e){
    this.setState({ femaleGender: true })
    this.setState({ maleGender: false })
  }

    /* GET METHOD */
    componentDidMount() {
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
    
    /* POST METHOD */
    handleSubmit = async e => {
      e.preventDefault();
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: this.state.name }),
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

        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Nom du chat:</strong>
          </p>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />

            <input type="checkbox" checked={this.state.maleGender} className="form-check-input" id="char1" onChange={this.handleMaleGender}/>
            <label htmlFor="char1" className="form-check-label"> Mâle </label>

            <input type="checkbox" checked={this.state.femaleGender} className="form-check-input" id="char2" onChange={this.handleFemaleGender}/>
            <label htmlFor="char2" className="form-check-label"> Femelle </label>

          <button type="submit">Submit</button>
        </form>
          <p>{this.state.responseToPost}</p>

<h4>état de response {this.state.response}</h4>
<h4>état de name {this.state.name}</h4>

<h4>état de dogs {this.state.okWithDogs}</h4>
<h4>état de responseTopost {this.state.responseToPost}</h4>
 <h4> {this.state.age}</h4>
            </div>
        );
    }
}

export default Backdoor;

