import React from 'react';
import styles from './styles.css';

const High = ({ children }) => (<strong className={styles.high}>{children}</strong>);
const Low = ({ children }) => (<strong className={styles.low}>{children}</strong>);

const Details = ({ conditions, today }) => (
  <div>
    <dl className={styles.dataList}>
      <dt>High</dt>
      <dd><High>{today.high.fahrenheit}</High> °F</dd>
      <dt>Low</dt>
      <dd><Low>{today.low.fahrenheit}</Low> °F</dd>
      <dt>Pressure</dt>
      <dd><strong>{conditions.pressure_in}</strong> in</dd>
      <dt>Visibility</dt>
      <dd><strong>{conditions.visibility_mi}</strong> miles</dd>
      <dt>Dew Point</dt>
      <dd><strong>{conditions.dewpoint_f}</strong> °F</dd>
    </dl>
  </div>
);

export default Details;
