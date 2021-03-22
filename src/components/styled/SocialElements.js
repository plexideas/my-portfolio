import styled from 'styled-components';

export const SocialWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  padding: 0 1rem;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SocialIcon = styled.img`
  width: 2rem;
  margin-right: 8px;

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 3rem;
    margin-top: 1rem;
    margin-right: 1rem;
  }
`;
