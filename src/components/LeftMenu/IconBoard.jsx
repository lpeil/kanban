import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

import Menu from './style';

const getColor = async (color) => {
  const colorLoader = import(`@material-ui/core/colors/${color}.js`);
  const colorComponent = await colorLoader;

  return colorComponent.default;
};

const IconBoard = ({ icon, color, brightness }) => {
  const [iconColor, setIconColor] = useState({});

  useEffect(async () => {
    setIconColor(await getColor(color));
  }, []);

  return (
    <Menu.Item.Icon color={iconColor[brightness]}>
      <Icon>{icon.toLowerCase()}</Icon>
    </Menu.Item.Icon>
  );
};

IconBoard.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  brightness: PropTypes.number.isRequired,
};

export default IconBoard;
