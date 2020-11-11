import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 10%;

  @media ${(props) => props.theme.breakpoints.desktop} {
    padding: 0 5%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 0 20px;
  }
`;
