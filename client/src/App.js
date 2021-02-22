import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from "./pages/Contact";
import Noussoutenir from './pages/Nous-soutenir';
import Conseils from './pages/Conseils';
import Evenements from './pages/Evenements';
import Adoptions from './pages/Adoptions';
import Backdoor from './pages/Backdoor';


class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
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
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path ="/" exact component={Home}/>
            <Route path ="/a-propos" exact component={About}/>
            <Route path ="/evenements" exact component={Evenements}/>
            <Route path ="/Contact" exact component={Contact}/>
            <Route path ="/Nous-soutenir" exact component={Noussoutenir}/>
            <Route path ="/Conseils" exact component={Conseils}/>
            <Route path ="/Adoptions" exact component={Adoptions}/>
            <Route path ="/Login" exact component={Backdoor}/>
            <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>

        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>

      </div>
    );
  }
}

export default App;