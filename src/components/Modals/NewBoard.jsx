import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Dialog, DialogContent, DialogActions, Button, TextField, Grid,
} from '@material-ui/core';

import DialogTitle from './components/DialogTitle';
import IconPicker from '../IconPicker';

import { toggleModal } from '../../store/modules/app/actions';
// import { createBoard } from '../../store/modules/boards/actions';

const ModalNewBoard = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.app.modal.createBoard);

  const [name, setName] = useState('');
  const [icon, setIcon] = useState('insert_drive_file');
  const [color, setColor] = useState('');

  const handleClose = () => {
    dispatch(toggleModal('createBoard'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const board = {
    //   name,
    //   icon: {
    //     name: icon,
    //     color,
    //   },
    // };

    // dispatch(createBoard(board));
    handleClose();
    setName('');
    setIcon('insert_drive_file');
    setColor('');
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle onClose={handleClose}>
          Create new board
        </DialogTitle>
        <DialogContent dividers>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                type="text"
                name="name"
                label="Board Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <IconPicker
                name="icon"
                label="Board Icon"
                color={color}
                value={icon}
                setValue={setIcon}
              />
            </Grid>
            <Grid item>
              <TextField
                type="color"
                name="color"
                label="Icon Color"
                fullWidth
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            Save changes
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModalNewBoard;
