import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import SearchBar from './containers/searchBar';
import t from './components/technologies';
import $ from 'jquery';
import 'bootstrap-loader';

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