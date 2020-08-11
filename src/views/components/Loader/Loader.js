import React from 'react';
import Container from '../Container';
import { LoaderContainer, Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <LoaderContainer>
        <Spinner />
      </LoaderContainer>
    </Container>
  );
};

export default Loader;
