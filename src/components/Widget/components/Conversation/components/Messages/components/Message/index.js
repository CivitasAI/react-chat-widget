import React, { PureComponent } from 'react';
import marked from 'marked';
import { PROP_TYPES } from 'constants';

import styles from './styles.scss';

class Message extends PureComponent {
  render() {
    const sanitizedHTML = marked.parse(this.props.message.get('text'));

    return (
      <div className={this.props.message.get('sender') === 'client' ? styles.client : styles.response}>
        <div className={styles['message-text']} dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE
};

export default Message;
