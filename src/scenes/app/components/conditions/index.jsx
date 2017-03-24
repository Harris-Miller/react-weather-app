/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'react-toolbox';
import { Col, Row } from 'react-grid-system';
import Overview from './components/overview';
import Details from './components/details';
// import styles from './styles.css';

export class Conditions extends Component {
  // shouldComponentUpdate(nextProps) {
  //   return !this.props.app.equals(nextProps);
  // }

  render() {

    const weather = this.props.app.get('weather');
    const conditions = weather && weather.conditions;
    const forecast = weather && weather.forecast;
    const today = forecast && forecast.simpleforecast && forecast.simpleforecast.forecastday && forecast.simpleforecast.forecastday[0];

    return (
      <Card>
        <CardTitle title="Current Conditions" subtitle={conditions && conditions.display_location.full} />
        <CardText>
          {conditions && today &&
            <Row>
              <Col sm={4}>
                <Overview conditions={conditions} today={today} />
              </Col>
              <Col sm={4}>
                <Details conditions={conditions} today={today} />
              </Col>
            </Row>
          }
        </CardText>
      </Card>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Conditions);
