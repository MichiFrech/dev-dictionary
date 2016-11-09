import React from 'react';
import {Component} from 'react';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import Technologies from '../components/technologies';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDictionary } from '../actions/fetchDictionary';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredList: []
        };
        var that = this;
        this.props.fetchDictionary().then(function() {
            var clone = that.props.dictionary.slice(0);
            clone.splice(100);
            that.setState({
                filteredList: clone
            });
        });
        this.update = this.update.bind(this);
    }

    update(technologies) {
        this.setState({
            filteredList: technologies
        });
    }

    render() {

        return (
            < div className="container-fluid" >
                < Header / >
                < SearchBar onSearchTermChange={this.update}/ >
                < Technologies technologies={this.state.filteredList} / >
            < / div >
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDictionary }, dispatch);
}

function mapStateToProps({ dictionary }) {
    return { dictionary };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);