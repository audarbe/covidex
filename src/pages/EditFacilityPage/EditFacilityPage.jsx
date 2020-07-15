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
                            value={this.state.formData.breed}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Street Address</label>
                        <input
                            name="streetAddress"
                            value={this.state.formData.age}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Suite Number</label>
                        <input
                            name="suiteNum"
                            value={this.state.formData.age}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>City</label>
                        <input
                            name="city"
                            value={this.state.formData.age}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Zip Code</label>
                        <input
                            name="zipCode"
                            value={this.state.formData.age}
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