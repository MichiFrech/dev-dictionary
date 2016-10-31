import React, {Component} from 'react';
import Search from 'react-search';
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
        this.filteredList = this.filteredList.splice(100);
    }

    technologies() {
        console.log(this.filteredList);
        return _.forEach(this.filteredList, function(technology) {
                return (
                    <div>{technology}</div>
            );
            });

    }


    render() {
        return (
             <div>
            <div className="form-group">
                <input type="text" onChange = {this.onChange} placeholder="Enter a technology (like React)" className="form-control"/>

            </div>
            <div>
                {this.filteredList}
            </div>
            </div>
        );
    }
}

function mapStateToProps({ dictionary }) {
    return { dictionary };
}

export default connect(mapStateToProps)(SearchBar);