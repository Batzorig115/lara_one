import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Add from "./Add";
import Listing from "./Listing";

export default class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/category">Listing</Link>
                        <Link to="/category/Add">Add</Link>
                        <Route exact path="/category" component={Add}/>
                        <Route exact path="/category/add" component={Listing}/>
                    </div>
                </Router>
            </div>
        );
    }
}

