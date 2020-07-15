import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class LoginPage extends Component {

    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            alert('Invalid Credentials!');
        }
    }

    render() {
        return (
            <div>
                <h1>LOG IN</h1>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <div>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.pw}
                                name="pw"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <button>Log In</button> |
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;