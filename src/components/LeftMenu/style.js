import styled from 'styled-components';

const Menu = styled.div`
  width: ${(props) => (props.fullWidth ? '250px' : '50px')};
  height: 100%;

  background-color: ${(props) => (props.theme.palette.type === 'light'
    ? props.theme.palette.grey[100]
    : props.theme.palette.grey[800])};
`;

Menu.Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${(props) => (props.fullWidth ? '50px 30px' : '50px 7px')};
  width: ${(props) => (props.fullWidth ? 'calc(100% - 60px)' : 'calc(100% - 14px)')};
`;

Menu.Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 5px 0;
  padding: ${(props) => (props.fullWidth ? '5px 10px' : '5px')};
  width: ${(props) => (props.fullWidth ? 'calc(100% - 20px)' : 'calc(100% - 10px)')};

  border-radius: 5px;
  background-color: ${(props) => (props.active ? props.theme.palette.background.default : 'transparent')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.background.default};
  }

  & span:not(.material-icons) {
    display: ${(props) => (props.fullWidth ? 'block' : 'none')};
  }

  & div {
    margin-right: ${(props) => (props.fullWidth ? '15px' : '0')};
    margin-left: ${(props) => (props.fullWidth ? '0' : '1px')};
  }
`;

Menu.Item.Icon = styled.div`
  width: 24px;
  height: 24px;

  color: ${(props) => props.color};
`;

Menu.Item.Title = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.palette.text.primary};
`;

Menu.Item.Quantity = styled.span`
  font-size: 14px;
  margin-left: 10px;

  color: ${(props) => props.theme.palette.text.secondary};
`;

export default Menu;
