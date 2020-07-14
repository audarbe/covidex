import React from 'react';
import './App.css';
import {NavLink, Route, Switch} from 'react-router-dom';
import UsStats from '../../components/UsStats/UsStats';
import StateStats from '../../components/StateStats/StateStats';


function App() {
  return (
    <div>
      <header>
      COVIDEX
          <nav>
            <p><NavLink exact to='/'>US</NavLink></p>
            <p><NavLink exact to='/state'>State</NavLink></p>
          </nav>
      </header>
      <main>
        <Switch>
            <Route exact path='/' render={() =>
                <UsStats />
            }
            />
            <Route path='/state' render={() =>
                <StateStats />
            }
            />
        </Switch>

      </main>
    </div>
  );
}

export default App;
