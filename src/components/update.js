import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDictionary } from '../actions/updateDictionary';

class Update extends Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.updateDictionary = this.updateDictionary.bind(this);
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

    updateDictionary() {
        var that = this;
        this.props.updateDictionary().then(() => {
            that.setState({
                showModal: true
            });
            that.props.update(that.props.updatedDictionary);
        });
    }

    render() {
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><b>Success</b></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>Dictionary has been successfully updated.</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <hr/>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={this.updateDictionary}>Update Dictionary</button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateDictionary }, dispatch);
}

function mapStateToProps({ updatedDictionary }) {
    return { updatedDictionary };
}

export default connect(mapStateToProps, mapDispatchToProps)(Update);