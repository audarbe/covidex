import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import UsStats from '../../components/UsStats/UsStats';
import StateStats from '../../components/StateStats/StateStats';
import SignupPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as facilityAPI from '../../services/facilities-api';
import FacilityListPage from '../FacilitiesListPage/FacilitiesListPage';
import AddFacilityPage from '../AddFacilityPage/AddFacilityPage';
import EditFacilityPage from '../EditFacilityPage/EditFacilityPage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: userService.getUser(),
            facilities: [],
        }
    };

    handleAddFacility = async newFacilityData => {
        const newFacility = await facilityAPI.create(newFacilityData);
        this.setState(state => ({
            facilities: [...state.facilities, newFacility]
        }), () => this.props.history.push('/facilities'));
    }

    handleDeleteFacility = async id => {
        await facilityAPI.deleteOne(id);
        this.setState(state => ({
          facilities: state.facilities.filter(f => f._id !== id)
        }),() => this.props.history.push('/facilities'));
      }

    handleEditFacility = async updatedFacilityData => {
        const updatedFacility = await facilityAPI.update(updatedFacilityData);
        const newFacilitiesArray = this.state.facilities.map(f => 
            f._id === updatedFacility._id ? updatedFacility : f
        );
        this.setState(
            {facilities: newFacilitiesArray},
            () => this.props.history.push('/facilities')
        );
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    };

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
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
                    <Route exact path='/' render={() =>
                        <UsStats />
                    }/>
                    <Route path='/state' render={() =>
                        <StateStats />
                    }/>
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
                    <Route exact path='/facilities' render={() =>
                        <FacilityListPage
                            user={this.state.user}
                            facilities={this.state.facilities}
                            handleDeleteFacility={this.handleDeleteFacility}
                        />
                    }/>
                    <Route exact path='/facilities/add' render={() =>
                        <AddFacilityPage
                            handleAddFacility={this.handleAddFacility}
                        />
                    }/>
                    <Route exact path='/facilities/edit' render={({location}) =>
                        <EditFacilityPage
                            location={location}
                            handleEditFacility={this.handleEditFacility}
                        />
                    }/>
                </main>
            </div>
        )
    }
}

export default App;