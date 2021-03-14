import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from "./pages/Contact";
import Noussoutenir from './pages/Nous-soutenir';
import Conseils from './pages/Conseils';
import Evenements from './pages/Evenements';
import Adoptions from './pages/Adoptions';
import Login from './pages/Backdoor';
import SignIn from './components/Log';

const BASE_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };    
  }

  componentDidMount() {
    axios({
      method: "get",
      url: `${BASE_URL}api/user/`,
    }).then((res)=>{this.setState({data:res.data})})
    .catch((err)=>console.log(err))
    }
  

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
            <Route path ="/Adoptions" exact render={(props) => <Adoptions {...props} data={this.state.data} />} />
            <Route path ="/Login" exact render={(props) => <Login {...props} data={this.state.data} />} />
            <Route path ="/Signin" exact component={SignIn} />

            <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;