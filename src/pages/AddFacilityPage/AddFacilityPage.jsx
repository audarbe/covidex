import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddFacilityPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            description: '',
            streetAddress: '',
            suiteNum: '',
            city: '',
            state: 'AL',
            zipCode: '',
            userId: this.props.user._id,
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddFacility(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <div className="container-single-page">
                <h3>ADD FACILITY</h3>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Facility Name</label>
                        <input
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            name="description"
                            value={this.state.formData.description}
                            onChange={this.handleChange}
                        />

                    </div>
                    <div className="form-group">
                        <label>Street Address</label>
                        <input
                            name="streetAddress"
                            value={this.state.formData.streetAddress}
                            onChange={this.handleChange}
                            required
                        />
                        <label>Suite Number</label>
                        <input
                            name="suiteNum"
                            value={this.state.formData.suiteNum}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input
                            name="city"
                            value={this.state.formData.city}
                            onChange={this.handleChange}
                            required
                        />
                        <label>State</label>
                        <select
                            name="state"
                            value={this.state.formData.state}
                            onChange={this.handleChange}
                        >
                            {this.props.statesEnum.map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))
                            }
                        </select>
                        <label>Zip Code</label>
                        <input
                            name="zipCode"
                            value={this.state.formData.zipCode}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group submit-container">
                        <Link to='/' className="label">Cancel</Link>
                        <button
                            className="form-button"
                            type="submit"
                            disabled={this.state.invalidForm}
                        >
                            ADD FACILITY
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddFacilityPage;