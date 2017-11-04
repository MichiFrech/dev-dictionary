import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className="footer">
                <hr/>
                <b>Powered by </b><img src="img/stackoverflow.png" width="25%"/>
            </h1>
        );
    }
}

export default Footer;