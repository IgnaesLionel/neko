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

      </div>
    );
  }
}

export default App;