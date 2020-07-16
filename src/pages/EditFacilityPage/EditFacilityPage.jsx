import React, { Component } from 'react';

class EditFacilityPage extends Component {
    state = {
        invalidForm: true,
        formData: this.props.location.state.facility,
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleEditFacility(this.state.formData);
      };
    
      handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
          formData,
          invalidForm: !this.formRef.current.checkValidity()
        });
      };

    render() {
        return (
            <>
                <h1>Add Facility</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Facility Name</label>
                        <input
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                            name="description"
                            value={this.state.formData.description}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Street Address</label>
                        <input
                            name="streetAddress"
                            value={this.state.formData.streetAddress}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Suite Number</label>
                        <input
                            name="suiteNum"
                            value={this.state.formData.suiteNum}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>City</label>
                        <input
                            name="city"
                            value={this.state.formData.city}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>State</label>
                        <select
                            name="state"
                            value={this.state.formData.state}
                            onChange={this.handleChange}
                        >
                            { this.props.statesEnum.map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))
                            }
                        </select>
                    </div>
                    <div>
                        <label>Zip Code</label>
                        <input
                            name="zipCode"
                            value={this.state.formData.zipCode}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        SAVE EDITS
          </button>
                </form>
            </>
        );
    }
}

export default EditFacilityPage;