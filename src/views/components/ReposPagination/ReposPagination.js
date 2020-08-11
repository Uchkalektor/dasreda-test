import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReposPaginationContainer, ReposPaginationItem } from './ReposPagination.styled';

const ReposPagination = ({ page, maxPage }) => {
  const PAGES_PER_PAGINATION = 5;
  const pagination = [];

  if (maxPage < 8) {
    for (let pageNumber = 1; pageNumber <= maxPage; pageNumber++) {
      pagination.push(
        <ReposPaginationItem as={NavLink} to={`/${pageNumber}`} key={pageNumber}>
          {pageNumber}
        </ReposPaginationItem>,
      );
    }
  } else {
    if (page < PAGES_PER_PAGINATION) {
      for (let pageNumber = 1; pageNumber <= PAGES_PER_PAGINATION; pageNumber++) {
        pagination.push(
          <ReposPaginationItem as={NavLink} to={`/${pageNumber}`} key={pageNumber}>
            {pageNumber}
          </ReposPaginationItem>,
        );
      }
    } else if (page > maxPage - PAGES_PER_PAGINATION + 1) {
      for (let pageNumber = PAGES_PER_PAGINATION - 1; pageNumber >= 0; pageNumber--) {
        pagination.push(
          <ReposPaginationItem
            as={NavLink}
            to={`/${maxPage - pageNumber}`}
            key={maxPage - pageNumber}
          >
            {maxPage - pageNumber}
          </ReposPaginationItem>,
        );
      }
    } else {
      for (
        let pageNumber = page - Math.floor((PAGES_PER_PAGINATION - 1) / 2);
        pageNumber <= page + Math.floor((PAGES_PER_PAGINATION - 1) / 2);
        pageNumber++
      ) {
        pagination.push(
          <ReposPaginationItem as={NavLink} to={`/${pageNumber}`} key={pageNumber}>
            {pageNumber}
          </ReposPaginationItem>,
        );
      }
    }
  }

  return (
    <ReposPaginationContainer>
      {page >= PAGES_PER_PAGINATION && maxPage > 8 && (
        <React.Fragment>
          <ReposPaginationItem as={NavLink} to="/1" key="1">
            1
          </ReposPaginationItem>
          <ReposPaginationItem key="separator1">...</ReposPaginationItem>
        </React.Fragment>
      )}
      {pagination}
      {page <= maxPage - PAGES_PER_PAGINATION + 1 && maxPage > 8 && (
        <React.Fragment>
          <ReposPaginationItem key="separator2">...</ReposPaginationItem>
          <ReposPaginationItem as={NavLink} to={`/${maxPage}`} key={maxPage}>
            {maxPage}
          </ReposPaginationItem>
        </React.Fragment>
      )}
    </ReposPaginationContainer>
  );
};

ReposPagination.propTypes = {
  page: PropTypes.number.isRequired,
};

export default ReposPagination;
