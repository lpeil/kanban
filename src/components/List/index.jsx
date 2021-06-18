import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

import { IconButton } from '@material-ui/core';
import { MoreHoriz, Add } from '@material-ui/icons';
import List from './style';
import ListCard from './ListCard';

const ListComponent = ({ list, boardId }) => {
  const [, drop] = useDrop(() => ({
    accept: 'card',
    drop: () => ({ list }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
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
      <List.Cards ref={drop}>
        {list.cards?.map((card, key) => (
          <ListCard
            card={card}
            key={key}
            index={key}
            listId={list.id}
            boardId={boardId}
          />
        ))}
      </List.Cards>
    </List>
  );
};

ListComponent.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    cards: PropTypes.array,
  }),
  boardId: PropTypes.number.isRequired,
};

ListComponent.defaultProps = {
  list: {
    name: '',
    color: '',
    cards: [],
  },
};

export default ListComponent;
