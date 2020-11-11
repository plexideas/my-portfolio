import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: -128px;
  background: none;
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.colors.main};
  z-index: 100;

  @media ${(props) => props.theme.breakpoints.mobile} {
    top: 0px;
    height: 72px;
  }
`;

export const HeaderContentWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
`;
