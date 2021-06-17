import styled from 'styled-components';

const Board = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

Board.Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

Board.Header.Title = styled.span`
  color: ${(props) => props.theme.palette.text.primary};
  font-size: 24px;
  font-weight: bold;

  .material-icons {
    line-height: 30px;
    margin-right: 10px;
  }
`;

export default Board;
