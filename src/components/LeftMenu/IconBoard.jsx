import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

import Menu from './style';

const IconBoard = ({ icon, color }) => (
  <Menu.Item.Icon color={color}>
    <Icon>{icon.toLowerCase()}</Icon>
  </Menu.Item.Icon>
);

IconBoard.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default IconBoard;
