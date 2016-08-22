import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="form-group">
                <input type="text" class="form-control" id="technology" placeholder="Enter technology (like React)"/>
            </div>
        );
    }
}

export default SearchBar;