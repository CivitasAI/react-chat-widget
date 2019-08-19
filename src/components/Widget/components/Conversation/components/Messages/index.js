import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import styles from './styles.scss';

const scrollToBottom = () => {
  const messagesDiv = document.getElementById('messages');
  if (messagesDiv) messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { typingIndicator: props.typingIndicator };
  }

  componentDidMount() {
    scrollToBottom();
  }

  componentDidUpdate() {
    scrollToBottom();
  }
  getComponentToRender = (message) => {
    const ComponentToRender = message.get('component');
    if (message.get('type') === 'component') {
      return <ComponentToRender {...message.get('props')} />;
    }
    return <ComponentToRender message={message} />;
  };

  render() {
    return (
      <div id="messages" className={styles['messages-container']}>
        {
          this.props.messages.map((message, index) =>
            <div className={`${styles.message} civitas_${message.get('sender')}Parent`} key={index}>
              {
                this.props.profileAvatar &&
                message.get('showAvatar') &&
                <img src={this.props.profileAvatar} className={styles.avatar} alt="profile" />
              }
              {
                this.getComponentToRender(message)
              }
            </div>
          )
        }
        <div id="typing-indicator" className={this.props.typingIndicator ? styles['typing-indicator'] : null}></div>

      </div>


    );
  }
}

Messages.propTypes = {
  messages: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
  profileAvatar: PropTypes.string,
  typingIndicator: PropTypes.bool
};

export default connect(store => ({
  messages: store.messages
}))(Messages);
