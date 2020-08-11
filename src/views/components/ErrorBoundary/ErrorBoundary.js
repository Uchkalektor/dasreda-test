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

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator errorMessage={this.state.errorMessage} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
