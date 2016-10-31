import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../css/dev-dictionary.css';
import _ from 'lodash';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.filteredList = this.props.dictionary.splice(100);
        this.onChange = this.onChange.bind(this);

    }
    onChange(event) {
        this.filteredList = _.filter(this.props.dictionary, function(o) { return o.indexOf(event.target.value) > -1; });
        this.filteredList > 100 ? this.filteredList.splice(100) : this.filteredList;
        console.log(this.filteredList);
        this.props.onSearchTermChange(this.filteredList);
    }


    render() {
        return (
            <div className="form-group">
                <input type="text" onChange = {this.onChange} placeholder="Enter a technology (like React)" className="form-control"/>

            </div>
        );
    }
}

function mapStateToProps({ dictionary }) {
    return { dictionary };
}

export default connect(mapStateToProps)(SearchBar);