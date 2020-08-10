import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';

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

const ErrorIndicator = (props) => {
  const { errorMessage, resetErrorIndicator } = props;

  return (
    <Container>
      <ErrorIndicatorContainer>
        <div className="title">Error!!!</div>
        <div className="message">{errorMessage.toString()}</div>
        <div className="go-back" onClick={resetErrorIndicator}>
          Go back
        </div>
      </ErrorIndicatorContainer>
    </Container>
  );
};

ErrorIndicator.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  resetErrorIndicator: PropTypes.func.isRequired,
};

export default ErrorIndicator;
