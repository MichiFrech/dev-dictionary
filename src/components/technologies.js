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
        return this.props.technologies.map((technology) => {
            return (
             <div className="technologies" key={technology}>{technology}</div>
            );
        });


    }
}

export default Technologies;