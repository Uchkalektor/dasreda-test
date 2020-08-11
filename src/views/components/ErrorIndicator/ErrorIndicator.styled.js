import styled from 'styled-components';

const ErrorIndicatorContainer = styled.div`
  width: 100%;
  text-align: center;

  .title {
    color: red;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .message {
    margin-top: 12px;
  }

  .go-back {
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    margin-top: 12px;

    &:hover {
      color: blue;
    }
  }
`;

export default ErrorIndicatorContainer;
