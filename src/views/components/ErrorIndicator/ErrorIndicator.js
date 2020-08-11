import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Container from '../Container';
import ErrorIndicatorContainer from './ErrorIndicator.styled';

const ErrorIndicator = (props) => {
  const { errorMessage } = props;

  const history = useHistory();

  const resetErrorIndicator = () => {
    history.goBack();
  };

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
};

export default ErrorIndicator;
