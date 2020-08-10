import React from 'react';
import styled from 'styled-components';

const ContainerBlock = styled.div`
  padding: 1.5rem;
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  flex-grow: 1;
  box-sizing: border-box;
`;

const Container = (props) => {
  return <ContainerBlock>{props.children}</ContainerBlock>;
};

export default Container;
