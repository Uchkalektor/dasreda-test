import React from 'react';
import PropTypes from 'prop-types';
import ReposItemWrap from './ReposItem.styled';

const ReposItem = (props) => {
  const { repo } = props;

  return (
    <ReposItemWrap>
      <div className="repo__name">{repo.full_name}</div>
      <div className="repo__description">{repo.description}</div>
      <div className="repo__stars">
        Stars: <span>{repo.stargazers_count}</span>
      </div>
      {repo.license && (
        <div className="repo__license">
          License: <span>{repo.license.name}</span>
        </div>
      )}
      <div className="repo__link">
        <a href={repo.html_url} rel="noreferrer noopener" target="_blank">
          Go to repository
        </a>
      </div>
    </ReposItemWrap>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.shape({
    full_name: PropTypes.string,
    description: PropTypes.string,
    stargazers_count: PropTypes.number,
    license: PropTypes.object,
    html_url: PropTypes.string,
  }),
};

export default ReposItem;
