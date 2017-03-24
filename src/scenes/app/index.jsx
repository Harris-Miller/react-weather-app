import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
// import { Route } from 'react-router-dom';
import AppBar from './components/app-bar';
import Conditions from './components/conditions';
import { fetchCurrentConditions } from './actions';

export class App extends Component {
  componentDidMount() {
    const { fetchConditions } = this.props;
    fetchConditions();
  }

  render() {
    const { children } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <AppBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <Conditions />
          </Col>
        </Row>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchConditions: () => dispatch(fetchCurrentConditions())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
