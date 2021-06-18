import React from 'react';
import PropTypes from 'prop-types';

import { IconButton } from '@material-ui/core';
import { MoreHoriz, Add } from '@material-ui/icons';
import List from './style';
import ListCard from './ListCard';

const ListComponent = ({ list }) => (
  <List>
    <List.Header>
      <List.Title color={list.color}>{list.name}</List.Title>
      <List.Actions>
        <IconButton>
          <MoreHoriz />
        </IconButton>
        <IconButton>
          <Add />
        </IconButton>
      </List.Actions>
    </List.Header>
    <List.Cards>
      {list.cards?.map((card, key) => (
        <ListCard card={card} key={key} />
      ))}
    </List.Cards>
  </List>
);

ListComponent.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
    cards: PropTypes.array,
  }),
};

ListComponent.defaultProps = {
  list: {
    name: '',
    color: '',
    cards: [],
  },
};

export default ListComponent;
