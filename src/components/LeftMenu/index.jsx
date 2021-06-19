import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Add } from '@material-ui/icons';

import Menu from './style';
import IconBoard from './IconBoard';

import { toggleModal } from '../../store/modules/app/actions';

const LeftMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const isDrawerOpen = useSelector((state) => state.app.drawer);
  const [location, setLocation] = useState(history.location.pathname);

  history.listen((loc) => {
    setLocation(loc.pathname);
  });

  return (
    <Menu fullWidth={!isDrawerOpen}>
      <Menu.Content fullWidth={!isDrawerOpen}>
        {boards?.map((board, key) => (
          <Menu.Item
            key={key}
            active={location === `/b/${board.name}`}
            fullWidth={!isDrawerOpen}
            onClick={() => history.push(`/b/${board.name}`)}
          >
            <IconBoard
              icon={board.icon?.name}
              color={board.icon?.color}
            />
            <Menu.Item.Title>{board.name}</Menu.Item.Title>
            <Menu.Item.Quantity>{board.cards?.length}</Menu.Item.Quantity>
          </Menu.Item>
        ))}
        <Menu.Item fullWidth={!isDrawerOpen} onClick={() => dispatch(toggleModal('createBoard'))}>
          <Menu.Item.Icon>
            <Add color="primary" />
          </Menu.Item.Icon>
          <Menu.Item.Title>New Board</Menu.Item.Title>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
};

export default LeftMenu;
