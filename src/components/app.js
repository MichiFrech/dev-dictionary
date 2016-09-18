import React from 'react';
import {Component} from 'react';
import Header from './header';
import SearchBar from '../containers/searchBar';

export default class App extends Component {
    render() {
        return (
            < div >
            < Header / >
            < SearchBar / >
            < / div >
    )
        ;
    }
}