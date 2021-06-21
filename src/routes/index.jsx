import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';

import Board from '../screens/Board';
import HomePage from '../screens/Home';
import NotFoundPage from '../screens/NotFound';

import {
  Navbar, LeftMenu, Body, Content, Modals,
} from '../components';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Navbar />
    <Body>
      <LeftMenu />
      <Content>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/b/:name" exact component={Board} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Content>
    </Body>
    <Modals />
  </ConnectedRouter>
);

export default Routes;
