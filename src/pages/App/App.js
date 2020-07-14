import React, { Component } from 'react';
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import UsStats from '../../components/UsStats/UsStats';
import StateStats from '../../components/StateStats/StateStats';
import SignupPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: userService.getUser()
        }    
    }

    handleLogout = () => {
        userService.logout();
        this.setState({user: null});
      };
    
      handleSignupOrLogin = () => {
        this.setState({user: userService.getUser()});
      }

    render() {
        return (
        <div>
            <header>
                COVIDEX
            <NavBar 
                user={this.state.user}
                handleLogout={this.handleLogout}
            />
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
                    <Route path='/signup' render={({ history }) => 
                        <SignupPage
                        history={history}
                        handleSignupOrLogin={this.handleSignupOrLogin}
                        />
                    }/>
                    <Route exact path='/login' render={({ history }) => 
                        <LogInPage
                        handleSignupOrLogin={this.handleSignupOrLogin}
                        history={history}
                        />
                    }/>
                </Switch>

            </main>
        </div>
        )
    }
}

export default App;