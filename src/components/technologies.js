import React, {Component} from 'react';
import _ from 'lodash';
import '../../css/dev-dictionary.css';
import {Modal, Button} from 'react-bootstrap';

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
                    <div id="xx"></div>
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
        console.log(technology);

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

export default Technologies;