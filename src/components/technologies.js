import React, {Component} from 'react';
import $ from 'jquery';
import '../../css/dev-dictionary.css';
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTechnologyDetails } from '../actions/fetchTechnologyDetails';


class Technologies extends Component {
    constructor(props) {
        super(props);
        this.displayDetails = this.displayDetails.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            showModal: false
        };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div id="display"></div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button onClick={this.close}>Close</Button>
                        </Modal.Footer>
                </Modal>
                {this.technologies()}
            </div>
    );
    }

    displayDetails(technology) {
        this.setState({ showModal: true });
        this.props.fetchTechnologyDetails(technology);
    }

    technologies() {
        return this.props.technologies.map((technology) => {
            return (
             <div className="technologies" key={technology}>
                <a href="#" onClick={() => this.displayDetails(technology)}>{technology}</a>
                </div>
            );
        });


    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTechnologyDetails }, dispatch);
}

function mapStateToProps({ dictionary }) {
    return { dictionary };
}

export default connect(null, mapDispatchToProps)(Technologies);