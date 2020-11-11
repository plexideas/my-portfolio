import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SidebarContentWrapper, SidebarPositionWrapper } from './styled';
import { MobileMenu } from './MobileMenu';

export const Sidebar = ({ children }) => {
  const isMobileMenuVisible = useSelector((state) => (
    state.common.isMobileMenuVisible
  ));
  return (
    <SidebarPositionWrapper visible={isMobileMenuVisible}>
      <SidebarContentWrapper>
        {children}
      </SidebarContentWrapper>
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
