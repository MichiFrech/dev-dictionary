import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components.header';
import SearchBar from './components/searchBar';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));