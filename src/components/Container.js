import React from 'react';
import PropTypes from 'prop-types';
import { ContainerWrapper } from './styled';

export const Container = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
