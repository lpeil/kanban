import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollArea from 'react-scrollbar';

const ContentDiv = styled.div`
  width: calc(100% - ${(props) => (props.fullWidth ? '50px' : '250px')});
  height: calc(100vh - 50px);

  transition: .2s;

  & .scrollarea {
    height: 100%;
  }

  & .scrollarea-content {
    padding: 55px 50px 0;
  }

  @media screen and (max-width: ${(props) => `${props.theme.breakpoints.values.md}px`}) {
    width: 100%;
    height: calc(100vh - 100px);

    & .scrollarea {
      height: calc(100vh - 100px);
    }
  }
`;

const Content = ({ children }) => {
  const isLeftMenuOpen = useSelector((state) => state.menu.leftMenu);

  return (
    <ContentDiv fullWidth={isLeftMenuOpen}>
      <ScrollArea speed={0.8} vertical smoothScrolling>
        {children}
      </ScrollArea>
    </ContentDiv>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
