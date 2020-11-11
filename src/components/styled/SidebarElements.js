import styled from 'styled-components';

export const SidebarPositionWrapper = styled.div`
  width: 200px;
  float: right;
  position: relative;
  background-color: ${(props) => props.theme.colors.main};

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const SidebarContentWrapper = styled.div`
  position: fixed;
  width: 200px;
`;
