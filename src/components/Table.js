import React from 'react';
import PropTypes from 'prop-types';
import { TableWrapper } from './styled';

export const Table = ({ children }) => (
  <TableWrapper>
    <table>{children}</table>
  </TableWrapper>
);

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
