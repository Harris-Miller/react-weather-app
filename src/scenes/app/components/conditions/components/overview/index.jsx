import React from 'react';
import { Col, Row } from 'react-grid-system';
import styles from 'styles/common.css';

const Overview = ({ conditions, today }) => (
  <div>
    <div>
      Elev <strong>{conditions.display_location.elevation}</strong> ft <strong>{conditions.display_location.latitude}</strong> °N, <strong>{conditions.display_location.longitude}</strong> °W
    </div>
    <Row>
      <Col xs={3}>
        <div className={styles.center}>
          <img src={conditions.icon_url} alt={conditions.icon} />
          {conditions.weather}
        </div>
      </Col>
      <Col xs={3}>
        <div>{conditions.temp_f} °F</div>
        <div>Feels Like {conditions.feelslike_f} °F</div>
      </Col>
      <Col xs={3}>
        {' '}
      </Col>
    </Row>
  </div>
);

export default Overview;
