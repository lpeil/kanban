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

Board.Body = styled.div`
  width: 100%;
  margin-top: 24px;

  .scrollarea {
    height: auto !important;
    width: 100%;

    .scrollarea-content {
      padding: 0;
      width: fit-content;
    }
  }
`;

Board.Items = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-flow: row nowrap;

  width: fit-content;
  padding: 10px 0;
`;

export default Board;
