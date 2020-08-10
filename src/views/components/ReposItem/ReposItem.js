import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReposItemWrap = styled.div`
  padding: 12px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin-bottom: 8px;

  .repo__name {
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: bold;
    margin-bottom: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .repo__description {
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }

  .repo__stars,
  .repo__license,
  .repo__link {
    font-weight: bold;
    display: inline-block;
    margin-right: 12px;

    a {
      color: blue;
      text-decoration: none;
      position: relative;

      &:after {
        position: absolute;
        content: '';
        width: 0;
        height: 1px;
        background-color: blue;
        left: 0;
        bottom: -4px;
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        &:after {
          width: 100%;
        }
      }
    }

    span {
      font-weight: normal;
    }
  }
`;

const ReposItem = (props) => {
  const { repo } = props;

  return (
    <ReposItemWrap>
      <div className="repo__name">{repo.full_name}</div>
      <div className="repo__description">{repo.description}</div>
      <div className="repo__stars">
        Stars: <span>{repo.stargazers_count}</span>
      </div>
      {repo.license !== null && repo.license !== undefined ? (
        <div className="repo__license">
          License: <span>{repo.license.name}</span>
        </div>
      ) : (
        ''
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
  repo: PropTypes.object.isRequired,
};

export default ReposItem;
