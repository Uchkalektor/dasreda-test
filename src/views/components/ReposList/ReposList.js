import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReposItem from '../ReposItem';

const ReposListContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ReposList = (props) => {
  const { repos } = props;
  return (
    <ReposListContainer>
      {repos.map((item) => {
        return <ReposItem repo={item} key={item.id} />;
      })}
    </ReposListContainer>
  );
};

ReposList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
};

export default ReposList;
