import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <p> Total Counter: { this.props.totalCounter }</p>
        </nav>);
    }
}
 
export default Navbar;