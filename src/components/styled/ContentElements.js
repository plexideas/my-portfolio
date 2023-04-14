import styled from 'styled-components';

export const ContentWrapper = styled.main`
  width: 100%;
  min-height: 120px;
  padding: 0 300px 3rem 0;

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 0;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
  }
`;
