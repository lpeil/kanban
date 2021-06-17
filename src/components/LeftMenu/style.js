import styled from 'styled-components';

const Menu = styled.div`
  width: ${(props) => (props.fullWidth ? '250px' : '60px')};
  height: 100%;

  transition: .2s;

  background-color: ${(props) => (props.theme.palette.type === 'light'
    ? props.theme.palette.grey[100]
    : props.theme.palette.grey[800])};
`;

Menu.Content = styled.div`
  display: flex;
  flex-direction: column;

  transition: .2s;

  padding: ${(props) => (props.fullWidth ? '50px 20px' : '50px 7px')};
  width: ${(props) => (props.fullWidth ? 'calc(100% - 60px)' : 'calc(100% - 14px)')};
`;

Menu.Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  transition: .2s;

  margin: 5px 0;
  padding: ${(props) => (props.fullWidth ? '10px 10px' : '10px 10px')};
  width: ${(props) => (props.fullWidth ? 'calc(100%)' : 'calc(100% - 20px)')};

  border-radius: 5px;
  background-color: ${(props) => (props.active ? props.theme.palette.background.default : 'transparent')}; 
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.background.default};
    
    transition: .2s;
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
  white-space: nowrap;
  color: ${(props) => props.theme.palette.text.primary};
`;

Menu.Item.Quantity = styled.span`
  font-size: 14px;
  margin-left: 10px;

  color: ${(props) => props.theme.palette.text.secondary};
`;

export default Menu;
