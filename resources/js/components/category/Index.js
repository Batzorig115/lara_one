import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Add from "./Add";
import Listing from "./Listing";
import Edit from "./Edit";

export default class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <hr />
                        <Link className="btn btn-primary" to="/category">Listing</Link>&nbsp;
                        <Link className="btn btn-primary" to="/category/Add">Add</Link>
                        <Route exact path="/category" component={Listing} />
                        <Route exact path="/category/add" component={Add} />
                        <Route exact path="/category/edit/::id" component={Edit} />
                        <hr />
                    </div>
                </Router>
            </div>
        );
    }
}

