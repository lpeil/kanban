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

import { toggleLeftMenu } from '../../store/modules/menu/actions';
import { changeToDarkMode, changeToLightMode } from '../../store/modules/theme/actions';

const NavbarComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const themeSelected = useSelector((state) => state.theme);

  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Content>
          <Navbar.Icon>
            <Menu onClick={() => dispatch(toggleLeftMenu())} />
          </Navbar.Icon>
          <Navbar.Icon>
            <Home onClick={() => history.push('/')} />
          </Navbar.Icon>
          <Navbar.SearchInput
            htmlFor="search-input"
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
              <DarkTheme onClick={() => dispatch(changeToLightMode())} />
            ) : (
              <LightTheme onClick={() => dispatch(changeToDarkMode())} />
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
