import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  position: fixed;
  width: 200px;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.mobile} {
    align-items: flex-end;
  }
`;
