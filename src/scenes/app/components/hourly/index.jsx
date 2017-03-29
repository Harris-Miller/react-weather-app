import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'react-toolbox';
import { Col, Row } from 'react-grid-system';
import styles from 'styles/common.css';

export const Hourly = ({ app }) => {
  const weather = app.get('weather') || {};
  const conditions = weather && weather.conditions;
  const hourly = weather && weather.hourly || [];

  console.log(hourly);

  return (
    <Card>
      <CardTitle title="Hourly Forecast" subtitle={conditions && conditions.display_location.full} />
      <CardText>
        <Row>
          {hourly.map(hour => (
            <Col sm={1}>
              <div className={styles.center}>
                <img src={hour.icon_url} alt={hour.icon} />
                {hour.condition}
              </div>
            </Col>
          ))}
        </Row>
      </CardText>
    </Card>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Hourly);
