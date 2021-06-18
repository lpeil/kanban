import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './style';

const ListCard = ({ card }) => (
  <Card>{card.name}</Card>
);

ListCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default ListCard;
