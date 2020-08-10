import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorMessage: error });
  }

  resetErrorIndicator = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorIndicator
          resetErrorIndicator={this.resetErrorIndicator}
          errorMessage={this.state.errorMessage}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
