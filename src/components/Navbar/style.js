import styled from 'styled-components';
import { OutlinedInput } from '@material-ui/core';

const Navbar = styled.nav`
  position: fixed;

  height: 50px;
  width: 100%;

  background-color: ${(props) => props.theme.palette.primary.main};
  z-index: 1;

  @media screen and (max-width: ${(props) => `${props.theme.breakpoints.values.md}px`}) {
    height: 100px;
  }
`;

Navbar.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 50px);
  height: 100%;
  padding: 0 25px;

  @media screen and (max-width: ${(props) => `${props.theme.breakpoints.values.md}px`}) {
    height: 50px;
  }
`;

Navbar.Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .MuiInputBase-root {
      height: 35px;
      color: ${(props) => props.theme.palette.background.default};

      .MuiOutlinedInput-notchedOutline {
        border: none;
        background-color: #FFFFFF30;
      }
    }
  }
`;

Navbar.Icon = styled.div`
  color: ${(props) => props.theme.palette.background.default};
  font-size: 0px;
  margin: 0 10px;

  cursor: pointer;
`;

Navbar.SearchInput = styled(OutlinedInput)`
  position: absolute;

  top: 50px;
  width: 90%;
`;

export default Navbar;
