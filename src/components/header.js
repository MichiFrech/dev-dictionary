import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <h1>
                <img src="img/logo.png" className="logo"/>
                <b>Dev Dictionary <small>v2.2.0</small></b>
            </h1>

        );
    }
}

export default Header;