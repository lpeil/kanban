import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const List = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: column;

  width: 300px;
  max-width: 100%;
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
`;

List.Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

List.Title = styled.span`
  height: 18px;
  padding: 0 6px;

  color: ${(props) => props.theme.palette.grey[800]};
  line-height: 120%;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;

List.Actions = styled.div`
  & button {
    height: 18px;
    width: 24px;

    border-radius: 4px;
    margin: 0 4px;

    &:last-child {
      margin-right: 0;
    }
  }

  & svg {
    fill: ${(props) => props.theme.palette.text.secondary};
  }
`;

List.Cards = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin: 16px 0;
`;

const Card = styled(Paper)`
  display: flex;

  margin: 8px 0;
  padding: 16px;

  color: ${(props) => props.theme.palette.text.primary};
  background-color: ${(props) => props.theme.palette.background.paper};
  opacity: ${(props) => (props.hovering ? 0 : 1)};
  cursor: pointer;
`;

export { Card };
export default List;
