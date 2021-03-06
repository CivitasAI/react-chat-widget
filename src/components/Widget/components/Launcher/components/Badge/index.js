import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Badge = ({ badge }) =>
  badge > 0 &&
  <span className={styles.badge}>{badge}</span>;

Badge.propTypes = {
  badge: PropTypes.number
};

export default Badge;
