import styled from 'styled-components';

export const MobileMenuButton = styled.button`
  border: none;
  background: none;
  width: 32px;
  height: 32px;

  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;

  display: none;
  
  @media ${(props) => props.theme.breakpoints.mobile} {
    display: block;
  }
`;
