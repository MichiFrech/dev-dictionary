import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../css/dev-dictionary.css';

class Technologies extends Component {
    constructor(props) {
        super(props);

    }

    renderDictionaryList() {
        return this.props.dictionary.map ((technology, index) => {
            if (index > 300) {return;}
            return (
                    <div key={technology} className="col-md-1 technologies">{technology}</div>

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