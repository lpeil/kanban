import styled from 'styled-components';
import { TextField, Paper, Grid } from '@material-ui/core';

export const Input = styled(TextField)`
  .MuiFormLabel-root {
    transform: translate(0, 1.5px) scale(0.75);
  }
`;

const ListIcons = styled(Paper)`
  position: fixed;
  display: ${(props) => (props.open ? 'block' : 'none')};

  width: ${(props) => `${props.width}px`};
  height: 350px;

  z-index: 10;
`;

ListIcons.Content = styled(Grid)`
  padding: ${(props) => `${props.theme.spacing() * 3}px`};
  width: 100%;
`;

ListIcons.Icons = styled(Grid)`
  max-height: 250px;
  overflow: hidden;

  & .scrollarea {
    height: 250px;
  }

  & span {
    cursor: pointer;
    font-size: 32px;
  }
`;

export { ListIcons };
