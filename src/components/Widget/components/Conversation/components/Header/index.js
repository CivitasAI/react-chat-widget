import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import close from 'assets/clear-button.svg';
import './style.scss';

const Header = ({ title, subtitle, toggleChat, showCloseButton, titleAvatar }) =>
  <div className="header">
    {
      titleAvatar &&
      <img src={titleAvatar} className="avatar" alt="profile" />
    }
    <h4 className="title">
      <span>{title}<a data-tip="We are experimenting with this new feature called a chatbot.<br>A chatbot is a computer program designed to converse with you to help you quickly get answers.<br>Please try it out and let us know what you think at feedback@civitasai.com <br> We would love to hear from you." href="mailto:feedback@civitasai.com">BETA</a></span></h4>
    <ReactTooltip multiline="true" className="react_tooltip" />
    <span>{subtitle}</span>
    {
      showCloseButton &&
      <button className="close-button" onClick={toggleChat}>
        <img src={close} className="close" alt="close" />
      </button>
    }
  </div>;

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  titleAvatar: PropTypes.string
};
export default Header;
