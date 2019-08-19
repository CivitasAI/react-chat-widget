import React from 'react';
import PropTypes from 'prop-types';

import send from 'assets/send_button.svg';
import styles from './style.scss';

const Sender = ({ sendMessage, placeholder, disabledInput, autofocus }) =>
  <form className={styles.sender} onSubmit={sendMessage}>
    <input type="text" className={styles['new-message']} name="message" placeholder={placeholder} disabled={disabledInput} autoFocus={autofocus} autoComplete="off" />
    <button type="submit" className={styles.send}>
      <img src={send} className={styles['send-icon']} alt="send" />
    </button>
  </form>;

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool
};

export default Sender;
