import React, {Component} from 'react';
import Search from 'react-search';
import { connect } from 'react-redux';
import '../../css/dev-dictionary.css';
import $ from 'jquery';

class SearchBar extends Component {
    constructor(props) {
        super(props);

    }
    a(x) {
        return;
    }


    render() {
        return (
            <div className="form-group">
            <Search items={this.props.dictionary} onChange={this.a}  placeholder='Enter a technology (like React)'/>

            </div>
        );
    }
}

function mapStateToProps({ dictionary }) {
    return { dictionary };
}

export default connect(mapStateToProps)(SearchBar);