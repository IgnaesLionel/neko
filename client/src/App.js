import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Noussoutenir from "./pages/Nous-soutenir";
import Conseils from "./pages/Conseils";

import Adoptions from "./pages/Adoptions";
import Ajout from "./pages/Ajout";
import SignIn from "./components/Log";
import { UidContext } from "./components/AppContext";

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      uid: null,
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: `${API_URL}api/user/`,
    })
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => console.log(err));

    //looking if token
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          this.setState({ uid: res.data });
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
  }

  render() {
    return (
      <UidContext.Provider value={this.state.uid}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} data={this.state.data} />}
              />

              <Route path="/Contact" exact component={Contact} />
              <Route path="/Nous-soutenir" exact component={Noussoutenir} />
              <Route path="/Conseils" exact component={Conseils} />
              <Route path="/Ajout" exact component={Ajout} />
              <Route path="/Signin" exact component={SignIn} />
              <Route
                path="/Adoptions"
                exact
                render={(props) => (
                  <Adoptions {...props} data={this.state.data} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </UidContext.Provider>
    );
  }
}

export default App;
