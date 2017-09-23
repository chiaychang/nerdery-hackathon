import React, { Component } from 'react';
require('./header.scss');

class Header extends Component {
    render() {
        return (
            <header className="ui-header">
                <img src='/static/images/logo.png'/>
            </header>
        );
    }
}

export default Header;
