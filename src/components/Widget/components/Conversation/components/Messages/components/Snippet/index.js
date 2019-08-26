import React, { PureComponent } from 'react';
import { PROP_TYPES } from 'constants';

import styles from './styles.scss';

class Snippet extends PureComponent {
  render() {
    return (
      <div className={styles.snippet}>
        <h5 className={styles['snippet-title']}>
          { this.props.message.get('title') }
        </h5>
        <div className={styles['snippet-details']}>
          <a href={this.props.message.get('link')} target={this.props.message.get('target')} className={styles.link}>
            { this.props.message.get('link') }
          </a>
        </div>
      </div>
    );
  }
}

Snippet.propTypes = {
  message: PROP_TYPES.SNIPPET
};

export default Snippet;
