import React from 'react';
import './App.css';
//import useToken from './useToken';
import Game from '../Dashboard/Connect-4';
import Weather from '../Dashboard/Weather';

function App() {

  //const { token, setToken } = useToken(); 

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="wrapper">
      <Weather />
      <Game />
      <div className = "is-centered">
      <div className="box has-background-info">
            <subtitle id = "Inspiration"></subtitle>
          </div>
          <br></br>
          <div className ="box has-background-primary">
            <header>Looks like good weather for Connect-4 in Chapel Hill!</header>
            <br></br>
            <subtitle id = "temp"></subtitle>
            <br></br>
            <subtitle id = "humidity"></subtitle>
            <br></br>
            <subtitle id = "conditions"></subtitle>
          </div>
          <br></br>
          <div className ="box has-background-success">
            <subtitle>The Hornets love Connect-4!</subtitle>
            <br></br>
            <subtitle id = "NBA-Stats"></subtitle>
          </div>
          <div className ="box has-background-warning">
            <subtitle>If you lose, you have to name your child: </subtitle>
            <subtitle id = "BabyName"></subtitle>
          </div>
      </div>
      {/* <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;