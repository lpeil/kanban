import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';

import { Card } from './style';
import { moveBoardCard } from '../../store/modules/boards/actions';

const ListCard = ({ card, listId, boardId }) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: card,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult?.list?.id) {
        dispatch(moveBoardCard(boardId, item.id, listId, dropResult.list.id));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <Card
      ref={drag}
      hovering={isDragging}
    >
      {card.name}
    </Card>
  );
};

ListCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  listId: PropTypes.number.isRequired,
  boardId: PropTypes.number.isRequired,
};

export default ListCard;
