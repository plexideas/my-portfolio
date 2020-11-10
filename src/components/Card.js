import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  CardWrapper, CardBottomWrapper, H2, P,
} from './styled';

export const Card = ({
  title, excerpt, date, slug,
}) => (
  <CardWrapper>
    <H2 weight="bold" margin="0 0 1rem 0">
      { title }
    </H2>
    <P size="small" margin="0 0 1.5rem 0" color="dark">
      { excerpt }
    </P>
    <CardBottomWrapper>
      <P size="small" color="gray" weight="light">
        { date }
      </P>
      <Link to={slug}>Read more</Link>
    </CardBottomWrapper>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
