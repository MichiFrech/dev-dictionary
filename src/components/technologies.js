import React, {Component} from 'react';
import _ from 'lodash';

class Technologies extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
             {this.technologies()}
            </div>
    );
    }

    technologies() {
        return _.forEach(this.props.technologies, function(technology) {
            return (
                <div>{technology}</div>
            );
        });

    }
}

export default Technologies;