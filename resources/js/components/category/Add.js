import React, { Component } from 'react';

export default class Add extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="category_name">Category name</label>
                        <input type="text" class="form-control" id="category_name" aria-describedby="emailHelp" placeholder="Enter category"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

