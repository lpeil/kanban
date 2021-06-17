import styled from 'styled-components';

const Body = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;

  top: 50px;
  right: 0;
  width: 100%;
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.palette.background.default};

  overflow: hidden;
`;

export default Body;
