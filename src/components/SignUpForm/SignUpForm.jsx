import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
            <div className="container-single-page">
                <h3>SIGN UP</h3>
                <form
                    onSubmit={this.handleSubmit}
                    className="user-form"
                >
                    <div className="form-group">
                        <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                        <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        <input type="password" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                    </div>
                    <div>
                        <div>
                            <button className="form-button" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                            <Link to='/' className="label">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;
