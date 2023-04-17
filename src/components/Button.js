import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './styled';

export const Button = ({ children, to, onClick }) => (
  <ButtonWrapper to={to} onClick={onClick}>
    { children }
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};
