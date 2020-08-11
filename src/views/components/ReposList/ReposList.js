import React from 'react';
import PropTypes from 'prop-types';
import ReposItem from '../ReposItem';
import ReposListWrapper from './ReposList.styled';

const ReposList = (props) => {
  const { repos } = props;
  return (
    <ReposListWrapper>
      {repos.length
        ? repos.map((item) => {
            return <ReposItem repo={item} key={item.id} />;
          })
        : 'No repositories found'}
    </ReposListWrapper>
  );
};

ReposList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
};

export default ReposList;
