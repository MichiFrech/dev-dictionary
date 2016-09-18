import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../css/dev-dictionary.css';


class Technologies extends Component {
    constructor(props) {
        super(props);

    }

    renderDictionaryList() {
        console.log(this.props.dictionary);
        return this.props.dictionary.map ((tech) => {
            return (
                <li>
                    {tech}
                </li>
            );
        });
    }

    render() {
        return (
          <ul>
            {this.renderDictionaryList()}
          </ul>
        );

    }
}


function mapStateToProps({ dictionary }) {
    return { dictionary };
}

export default connect(mapStateToProps)(Technologies);

