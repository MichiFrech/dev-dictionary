import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import SearchBar from './containers/searchBar';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid text-center">
                <Header />
                <SearchBar />
                <hr />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));