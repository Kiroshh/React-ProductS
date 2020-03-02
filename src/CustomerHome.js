import React, {Component} from "react";
import CustomerForm from "./CustomerForm";
import CustomerDetails from "./CustomerDetails";


class CustomerHome extends Component {

    getData = () => {
        let customersStored = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let customer = JSON.parse(localStorage.getItem(key));
                customersStored.push(customer);
            }
        }
        this.setState({
            customers: customersStored
        })
    }

    componentDidMount() {
        this.getData();
    }

    onCustomerSubmit= (customer)=>{
        this.setState((prevState) => ({
            count: prevState.customers.push(customer)
        }))
    }


    constructor(props) {
        super(props);
        this.state = {customers: []};
    }

    render() {

        return (
            <div className="container">
                <CustomerForm onSubmit={this.onCustomerSubmit}></CustomerForm>
                <CustomerDetails customers={this.state.customers}></CustomerDetails>
            </div>
        )
    }
}

export default CustomerHome;