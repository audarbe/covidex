import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignupPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import userService from '../../utils/userService';
import WebsiteHeader from '../../components/WebsiteHeader/WebsiteHeader';
import * as facilityAPI from '../../services/facilities-api';
import * as statisticsAPI from '../../services/stats-api'
import FacilityListPage from '../FacilitiesListPage/FacilitiesListPage';
import AddFacilityPage from '../AddFacilityPage/AddFacilityPage';
import EditFacilityPage from '../EditFacilityPage/EditFacilityPage';
import StatsPage from '../StatsPage/StatsPage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: userService.getUser(),
            facilities: [],
            currentChoice: 'US',
            statistics: [],
            stateStatistics: [],
            stateTableData: [],
            currentSort: 'positiveIncrease',
            currentMapFilter: 'positiveIncrease',
        }

        this.statesEnum = [
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
            'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
            'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
            'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
            'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
        ]
    };

    async componentDidMount() {
        const facilities = await facilityAPI.getAll();
        let newStateStatistics = await statisticsAPI.getStateStatistics();
        this.setState(state => ({
            facilities: facilities,
            stateStatistics: newStateStatistics
        }))
        this.handleUpdateStats();
        this.filterStateData(this.state.currentSort);
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
        }), () => this.props.history.push('/facilities'));
    }

    handleEditFacility = async updatedFacilityData => {
        const updatedFacility = await facilityAPI.update(updatedFacilityData);
        const newFacilitiesArray = this.state.facilities.map(f =>
            f._id === updatedFacility._id ? updatedFacility : f
        );
        this.setState(
            { facilities: newFacilitiesArray },
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

    handleMapClick = (stateClicked) => {
        this.setState(
            { currentChoice: stateClicked },
            () => this.handleUpdateStats()
        );
    };

    handleUpdateStats = async () => {
        let newStatistics = await statisticsAPI.getStatistics(this.state.currentChoice);
        if (this.state.currentChoice === 'US') newStatistics = newStatistics[0];
        this.setState(
            { statistics: newStatistics, },
            () => this.props.history.push('/')
        );
    }

    filterStateData = async (order) => {
        this.state.stateStatistics.sort((a, b) => {
            return b[order] - a[order];
        });
        this.setState(
            { currentSort: order }
        );
    }

    handleMapFilter = async (mapFilter) => {
        this.setState(
            { currentMapFilter: mapFilter }
        );
    }

    render() {
        return (
            <>
                <header>
                    <WebsiteHeader
                        user={this.state.user}
                        handleLogout={this.handleLogout}
                        handleMapClick={this.handleMapClick}
                    />
                </header>
                <main>
                    <Route exact path='/' render={({ history }) =>
                        <StatsPage
                            history={history}
                            handleMapClick={this.handleMapClick}
                            currentChoice={this.state.currentChoice}
                            facilities={this.state.facilities}
                            statistics={this.state.statistics}
                            stateStatistics={this.state.stateStatistics}
                            currentSort={this.state.currentSort}
                            filterStateData={this.filterStateData}
                            currentMapFilter={this.state.currentMapFilter}
                            handleMapFilter={this.handleMapFilter}
                        />
                    } />
                    <Route path='/signup' render={({ history }) =>
                        <SignupPage
                            history={history}
                            handleSignupOrLogin={this.handleSignupOrLogin}
                        />
                    } />
                    <Route exact path='/login' render={({ history }) =>
                        <LogInPage
                            handleSignupOrLogin={this.handleSignupOrLogin}
                            history={history}
                        />
                    } />
                    <Route exact path='/facilities' render={() =>
                        <FacilityListPage
                            user={this.state.user}
                            facilities={this.state.facilities}
                            handleDeleteFacility={this.handleDeleteFacility}
                        />
                    } />
                    <Route exact path='/facilities/add' render={() =>
                        <AddFacilityPage
                            user={this.state.user}
                            handleAddFacility={this.handleAddFacility}
                            statesEnum={this.statesEnum}
                        />
                    } />
                    <Route exact path='/facilities/edit' render={({ location }) =>
                        <EditFacilityPage
                            location={location}
                            handleEditFacility={this.handleEditFacility}
                            statesEnum={this.statesEnum}
                        />
                    } />
                </main>
            </>
        )
    }
}

export default App;