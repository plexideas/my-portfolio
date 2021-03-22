import styled from 'styled-components';

export const PostWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.main};

  z-index: 10;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.dark};
  }
  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.dark};
    margin-top: 2rem;
  }

  a {
    color: ${(props) => props.theme.colors.dark};
    text-decoration: underline;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }

  ul,
  ol {
    color: ${(props) => props.theme.colors.dark};
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
  }

  code {
    font-family: ${(props) => props.theme.fonts.code};
    font-size: 1rem;
    line-height: 1.875rem;
    color: ${(props) => props.theme.colors.gray};
    padding: 0 0.3rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${(props) => props.theme.colors.dark};
    opacity: 0.1;
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  th {
    font-weight: 700;
  }

  table,
  th,
  td {
    border: 1px solid ${(props) => props.theme.colors.gray};
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }
`;

export const PostTitleWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightmint};
  color: ${(props) => props.theme.colors.dark};
  font-size: 3rem;
  font-weight: 100;
  line-height: 130%;
  padding: 1rem 0.5rem;
  padding-bottom: 3rem;
  margin-bottom: 1.5rem;

  & > b {
    background-color: ${(props) => props.theme.colors.iceblue}80;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
    padding: 10px;
  }
`;
