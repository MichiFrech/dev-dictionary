import React, {Component} from 'react';
import '../../css/dev-dictionary.css';
import _ from 'lodash';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);

    }
    onChange(event) {
        this.filteredList = _.filter(this.props.dictionary, function(o) { return o.indexOf(event.target.value) > -1; });
        this.filteredList.length > 100 ? this.filteredList.splice(100) : this.filteredList;
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

export default SearchBar