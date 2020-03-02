import React, {Component} from "react";

class CustomerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            phoneNo: ''
        };
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneNoChange = this.handlePhoneNoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleIdChange(event) {
        this.setState({id: event.target.value});
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handlePhoneNoChange(event) {
        this.setState({phoneNo: event.target.value});
    }

    handleSubmit(event) {
        let customer = this.state;
        localStorage.setItem(customer.id, JSON.stringify(customer));
        this.props.onSubmit(customer);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group" value={this.state.id} onChange={this.handleIdChange}>
                    <label>Id:
                        <input type="text"/>
                    </label>
                </div>
                <div className="form-group" value={this.state.name} onChange={this.handleNameChange}>
                    <label>Name:
                        <input type="text"/>
                    </label>
                </div>
                <div className="form-group" value={this.state.phoneNo} onChange={this.handlePhoneNoChange}>
                    <label>PhoneNo:
                        <input type="text"/>
                    </label>
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        );
    }
}

export default CustomerForm;