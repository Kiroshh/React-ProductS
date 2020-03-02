import React, {Component} from 'react';
import './App.css';
import Products from "./Products";
import {AllProducts} from "./data";
import Filter from "./Filter";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {products: AllProducts};
    }



    filterProducts = (manufacturers) => {

        let distinctManufactureProducts = AllProducts.filter(product => product.manufacturer === manufacturers)
        const filteredProducts = [];
        for (const product of distinctManufactureProducts) {
            if (!filteredProducts.includes(product)) {
                filteredProducts.push(product);
            }
            distinctManufactureProducts = filteredProducts;
        }
        this.setState((currentState) => ({
            products: AllProducts.filter(product => product.manufacturer === manufacturers)
        }))
    }

    resetFilter = () => {
        this.setState({
            products: AllProducts
        })
    }

    render() {

        const distinctManufacturers = [...new Set(AllProducts.map(p => p.manufacturer))];

        return <div className="centerdiv">
            <Filter distinctManufacturers={distinctManufacturers}
                    onFilter={this.filterProducts}
            />
            <br/>
            {this.state.products !== AllProducts &&
            <button onClick={this.resetFilter}> RESET FILTER </button>
            }
            <div>
                <Products products={this.state.products}/>
            </div>
        </div>;
    }
}


export default App;
