import { Link } from 'gatsby';
import styled from 'styled-components';

export const ButtonWrapper = styled(Link)`
  width: fit-content;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: capitalize;
  text-decoration: none;
  :hover {
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.main};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 2rem;
  }
`;
