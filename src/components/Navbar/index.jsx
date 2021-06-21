import React from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { InputAdornment } from '@material-ui/core';
import {
  Menu,
  NotificationsNone,
  Home,
  Settings,
  Brightness4 as DarkTheme,
  BrightnessHigh as LightTheme,
  Search,
} from '@material-ui/icons';
import Navbar from './style';

import { toggleDrawer, changeAppTheme } from '../../store/modules/app/actions';

const NavbarComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const themeSelected = useSelector((state) => state.app.theme);

  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Content>
          <Navbar.Icon>
            <Menu onClick={() => dispatch(toggleDrawer())} />
          </Navbar.Icon>
          <Navbar.Icon>
            <Home onClick={() => history.push('/')} />
          </Navbar.Icon>
          <Navbar.SearchInput
            name="search"
            placeholder="Find"
            startAdornment={(
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )}
          />
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Icon>
            <NotificationsNone />
          </Navbar.Icon>
          <Navbar.Icon>
            {themeSelected === 'dark' ? (
              <DarkTheme onClick={() => dispatch(changeAppTheme('light'))} />
            ) : (
              <LightTheme onClick={() => dispatch(changeAppTheme('dark'))} />
            )}
          </Navbar.Icon>
          <Navbar.Icon>
            <Settings />
          </Navbar.Icon>
        </Navbar.Content>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavbarComponent;
