import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;

const LoaderContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export { LoaderContainer, Spinner };
