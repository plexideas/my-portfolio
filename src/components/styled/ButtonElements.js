import { Link } from 'gatsby';
import styled from 'styled-components';

export const ButtonWrapper = styled(Link)`
  width: fit-content;
  padding: .5rem 1rem;

  :hover {
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.main};
  }
`;
