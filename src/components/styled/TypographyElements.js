import styled from 'styled-components';

export const P = styled.p`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  font-size: ${(props) => {
    switch (props.size) {
      case 'medium':
        return '1.125rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '0.875rem';
      default:
        return '1.125rem';
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case 'medium':
        return '1.4375rem';
      case 'small':
        return '1.375rem';
      case 'xSmall':
        return '1.125rem';
      default:
        return '1.4375rem';
    }
  }};
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'none')};
  font-weight: ${(props) => {
    switch (props.weight) {
      case 'light':
        return 300;
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case 'dark':
        return props.theme.colors.dark1;
      case 'gray':
        return props.theme.colors.gray;
      case 'light':
        return props.theme.colors.main;
      default:
        return props.theme.colors.dark;
    }
  }};
  text-align : ${(props) => (props.textAlign ? props.textAlign : 'left')};
`;

export const H1 = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: ${(props) => {
    switch (props.color) {
      case 'dark':
        return props.theme.colors.dark1;
      case 'gray':
        return props.theme.colors.gray;
      case 'light':
        return props.theme.colors.main;
      default:
        return props.theme.colors.dark;
    }
  }};
  font-weight: ${(props) => {
    switch (props.weight) {
      case 'light':
        return 300;
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};
  text-align : ${(props) => (props.textAlign ? props.textAlign : 'left')};
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${(props) => {
    switch (props.color) {
      case 'dark':
        return props.theme.colors.dark1;
      case 'gray':
        return props.theme.colors.gray;
      case 'light':
        return props.theme.colors.main;
      default:
        return props.theme.colors.dark;
    }
  }};
  font-weight: ${(props) => {
    switch (props.weight) {
      case 'light':
        return 300;
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};
  text-align : ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;
