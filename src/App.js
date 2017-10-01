import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='container text-center'>
                <Row>
                    <Col xs={12}>
                        <h1 className='header'>Pulltron</h1>
                        <h3 className='sub-header'>Bringing order to your pull requests</h3>
                    </Col>
                </Row>
                <Row style={{ marginTop: '15px' }}>
                    <Col xs={12}>
                        <Button
                            bsStyle='primary'
                            className='install-button'
                            href='https://github.com/apps/pulltron'
                            bsSize='lg'>
                            Install the GitHub app
                        </Button>
                    </Col>
                </Row>

                <Row style={{ marginTop: '15px' }}>
                    <Col xs={12}>
                        <h2 style={{ fontWeight: 'bold' }}>How does it work?</h2>
                    </Col>
                </Row>
                <Row style={{ marginTop: '15px' }}>
                    <Col xs={12}>
                        <p className="description-text">
                            Pulltron analyses your organisations GitHub repositories daily, looking for pull requests which are in need of some love.
                            If a pull request hasn't been updated in a while Pulltron will ping the relevant people for you.
                            Saving you, and everyone involved, from the awkward process of chasing people up.
                        </p>
                        <p className="description-text">
                            Pulltron tailors the comments it creates based on the current state of the pull request.
                            Whether it's in review or just waiting for some more changes, Pulltron knows what to say.
                        </p>
                        <p className="description-text">
                            When the pull request is clearly not going anywhere, and eventually becomes stale,
                            Pulltron will let you know and close it for you. Thus, reducing noise in your pull request list!
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
