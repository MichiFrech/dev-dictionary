import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className="header">
                <img src="img/logo.png" className="logo"/>
                <b>Dev Dictionary</b>
                <br/>
                <small>v {chrome.runtime.getManifest().version}</small>
            </h1>
        );
    }
}

export default Header;