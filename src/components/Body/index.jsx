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

  @media screen and (max-width: ${(props) => `${props.theme.breakpoints.values.md}px`}) {
    top: 100px;
    height: calc(100vh - 100px);
  }
`;

export default Body;
