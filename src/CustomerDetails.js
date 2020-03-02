import React, {Component} from "react";
import './CustomerDetails.css';

class CustomerDetails extends Component {


    render() {
        return (
            <div>
                {
                    this.props.customers.map((customer) => {
                        return <div key={customer.id}>
                            <table id='customers'>
                                <tbody>
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.phoneNo}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>


                    })}
            </div>

        )
    }
}

export default CustomerDetails;