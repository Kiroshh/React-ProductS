import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import CustomerHome from "./CustomerHome";

class App extends Component {


    render() {

        return <BrowserRouter>
            <div className="centerdiv">
                <Link to="/customers">Customers</Link>

                <Route exact path="/customers" component={CustomerHome}/>
                <Route exact path="/" component={Home}/>


            </div>
        </BrowserRouter>;
    }
}


export default App;
