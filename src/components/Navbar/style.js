import styled from 'styled-components';

const Navbar = styled.nav`
  position: fixed;

  height: 50px;
  width: 100%;

  background-color: ${(props) => props.theme.palette.primary.main};
  z-index: 1;
`;

Navbar.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 50px);
  height: 100%;
  padding: 0 25px;
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

export default Navbar;
