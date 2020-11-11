import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SidebarPositionWrapper } from './styled';
import { MobileMenu } from './MobileMenu';

export const Sidebar = ({ children }) => {
  const isMobileMenuVisible = useSelector((state) => (
    state.common.isMobileMenuVisible
  ));
  return (
    <SidebarPositionWrapper visible={isMobileMenuVisible}>
      {children}
      <MobileMenu isOpen />
    </SidebarPositionWrapper>
  );
};

Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
