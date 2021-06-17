import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  DialogTitle as MuiDialogTitle,
  Typography,
  IconButton,
} from '@material-ui/core';

import { Close as CloseIcon } from '@material-ui/icons';

const styles = (theme) => ({
  root: {
    margin: 0,
    width: '500px',
    maxWidth: '90vw',
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(({
  children, classes, onClose, ...other
}) => (
  <MuiDialogTitle disableTypography className={classes.root} {...other}>
    <Typography variant="h6">{children}</Typography>
    {onClose ? (
      <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    ) : null}
  </MuiDialogTitle>
));

export default DialogTitle;
