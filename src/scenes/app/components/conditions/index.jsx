/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'react-toolbox';
import styles from './styles.css';

const High = ({ children }) => (<strong className={styles.high}>{children}</strong>);
const Low = ({ children }) => (<strong className={styles.low}>{children}</strong>);

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
            <div>
              <div>
                Elev <strong>{conditions.display_location.elevation}</strong> ft <strong>{conditions.display_location.latitude}</strong> °N, <strong>{conditions.display_location.longitude}</strong> °W
              </div>
              <div>
                <dl>
                  <dt>High</dt>
                  <dd><High>{today.high.fahrenheit}</High></dd>
                  <dt>Low</dt>
                  <dd><Low>{today.low.fahrenheit}</Low></dd>
                  <dt>Pressure</dt>
                  <dd><strong>{conditions.pressure_in}</strong> in</dd>
                  <dt>Visibility</dt>
                  <dd><strong>{conditions.visibility_mi}</strong> miles</dd>
                  <dt>Dew Point</dt>
                  <dd><strong>{conditions.dewpoint_f}</strong> °F</dd>
                </dl>
              </div>
            </div>
          }
        </CardText>
      </Card>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Conditions);
