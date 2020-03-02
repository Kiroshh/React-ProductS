import React, {Component} from "react";

class Filter extends Component {

    render() {
        return (
            <div className="container">
                {this.props.distinctManufacturers.map((manufacturer) => {
                    return <button key={manufacturer}
                                   onClick={() => this.props.onFilter(manufacturer)}>{manufacturer}</button>
                })
                }
            </div>
        )
    }
}

export default Filter;