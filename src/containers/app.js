import React from 'react';
import {Component} from 'react';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import Technologies from '../components/technologies';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDictionary } from '../actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.props.fetchDictionary();
        this.update = this.update.bind(this);
    }

    update(technologies) {
        this.filteredList = technologies;
    }

    render() {
        return (
            < div className="container-fluid" >
                < Header / >
                < SearchBar onSearchTermChange={this.update}/ >
                < Technologies technologies={this.filteredList} / >
            < / div >
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDictionary }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);