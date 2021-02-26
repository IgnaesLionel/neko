import Navigation from '../components/Navigation/Navigation';
import React, { Component } from 'react';

class Backdoor extends 
Component {
    state = {
      response: '',
      post: '',
      responseToPost: '',
    };
    

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
        body: JSON.stringify({ post: this.state.post }),
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
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
          <p>{this.state.responseToPost}</p>

<h4>état de response {this.state.response}</h4>
<h4>état de post {this.state.post}</h4>
<h4>état de responseTopost {this.state.responseToPost}</h4>

            </div>
        );
    }
}

export default Backdoor;

