import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon, TextField } from '@material-ui/core';
import ScrollArea from 'react-scrollbar';
import axios from 'axios';

import { Input, ListIcons } from './style';

const codePointsURL = 'https://raw.githubusercontent.com/google/material-design-icons/master/font/MaterialIcons-Regular.codepoints';

const IconPicker = ({
  value, setValue, name, label, color,
}) => {
  const [text, setText] = useState('');
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [codePoints, setCodePoints] = useState([]);
  const inputRef = useRef();
  const cardRef = useRef();

  const handleClick = (icon) => {
    setValue(icon);
    setIsCardOpen(false);
  };

  useEffect(() => {
    axios.get(codePointsURL)
      .then((response) => response.data)
      .then((data) => {
        setCodePoints(data.split('\n'));
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsCardOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cardRef]);

  return (
    <Grid container item direction="row">
      <Grid container item xs={1} alignItems="center">
        <Icon style={{ color }}>{value}</Icon>
      </Grid>
      <Grid item xs={11} style={{ position: 'relative' }}>
        <Input
          inputRef={inputRef}
          type="text"
          name={name}
          label={label}
          fullWidth
          autoComplete="off"
          value={value}
          onFocus={() => setIsCardOpen(true)}
        />
        <ListIcons open={isCardOpen} width={inputRef.current?.offsetWidth} ref={cardRef}>
          <ListIcons.Content container spacing={2} direction="column">
            <Grid item xs={12}>
              <TextField
                label="Search"
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Grid>
            <ListIcons.Icons container item xs={12}>
              <ScrollArea speed={0.8} vertical smoothScrolling>
                <Grid container spacing={2} justify="space-around">
                  {codePoints
                    .filter((codePoint) => codePoint.includes(text))
                    .map((codePoint, key) => (
                      <Grid item key={key}>
                        <Icon onClick={() => handleClick(codePoint.split(' ')[0])}>
                          {codePoint.split(' ')[0]}
                        </Icon>
                      </Grid>
                    ))}
                </Grid>
              </ScrollArea>
            </ListIcons.Icons>
          </ListIcons.Content>
        </ListIcons>
      </Grid>
    </Grid>
  );
};

IconPicker.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default IconPicker;
