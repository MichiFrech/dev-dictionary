import React, {Component} from 'react';
import _ from 'lodash';
import '../../css/dev-dictionary.css';

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
                <div className="technologies">{technology}</div>
            );
        });

    }
}

export default Technologies;