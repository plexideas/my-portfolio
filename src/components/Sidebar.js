import React from 'react';
import PropTypes from 'prop-types';
import { SidebarContentWrapper, SidebarPositionWrapper } from './styled';

export const Sidebar = ({ children }) => (
  <SidebarPositionWrapper>
    <SidebarContentWrapper>
      {children}
    </SidebarContentWrapper>
  </SidebarPositionWrapper>
);

Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
