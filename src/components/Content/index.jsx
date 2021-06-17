import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollArea from 'react-scrollbar';

const ContentDiv = styled.div`
  width: calc(100% - ${(props) => (props.fullWidth ? '50px' : '250px')});
  height: calc(100vh - 50px);

  & .scrollarea {
    height: 100%;
  }

  & .scrollarea-content {
    padding: 55px 50px 0;
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
