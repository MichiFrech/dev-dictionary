import React, {Component} from 'react';
import { connect } from 'react-redux';
import a from '../../css/dev-dictionary.css';

class Technologies extends Component {
    constructor(props) {
        super(props);

    }

    renderDictionaryList() {
        return this.props.dictionary.map ((technolgy, index) => {
            if (index > 100) {return;}
            return (
                    <div key={technolgy} className="col-md-2 technologies">{technolgy}</div>

            );
        });
    }

    render() {
        return (
            <div>{this.renderDictionaryList()}</div>
          );

    }
}

function mapStateToProps({ dictionary }) {
    return { dictionary };
}

export default connect(mapStateToProps)(Technologies);