import React from 'react';
import { ApiServiceConsumer } from '../../views/components/ApiServiceContext';

const withApiService = () => (Wrapped) => {
  return (props) => {
    return (
      <ApiServiceConsumer>
        {(apiService) => {
          return <Wrapped {...props} apiService={apiService} />;
        }}
      </ApiServiceConsumer>
    );
  };
};

export default withApiService;
