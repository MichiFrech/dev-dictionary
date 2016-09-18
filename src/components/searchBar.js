import React, {Component} from 'react';
import Search from 'react-search';
import { connect } from 'react-redux';
import '../../css/dev-dictionary.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="form-group">

            <Search className="col-md-2" items={this.props.dictionary} placeholder='Enter a technology (like React)'/>

            </div>
        );
    }
}

function mapStateToProps({ dictionary }) {
    return { dictionary };
}

export default connect(mapStateToProps)(SearchBar);