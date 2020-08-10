import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -4px;
  margin-right: -4px;
`;

const PaginationItem = styled.div`
  display: block;
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  width: 30px;
  text-align: center;
  border-radius: 4px;
  background: #000;
  color: #fff;
  text-decoration: none;
  margin: 0 4px;
  transition: all 0.2s ease-in-out;

  &:not(div):hover {
    transform: matrix(1, 0, 0, 1, -1, -1);
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.75);
  }
`;

const ReposPagination = ({ page }) => {
  const MAX_PAGE = 100;
  const PAGES_PER_PAGINATION = 5;
  const pagination = [];

  if (page < PAGES_PER_PAGINATION) {
    for (let pageNumber = 1; pageNumber <= PAGES_PER_PAGINATION; pageNumber++) {
      pagination.push(
        <PaginationItem as={NavLink} to={`/${pageNumber}`} key={pageNumber}>
          {pageNumber}
        </PaginationItem>,
      );
    }
    pagination.push(<PaginationItem key="separator">...</PaginationItem>);
    pagination.push(
      <PaginationItem as={NavLink} to="/100" key="100">
        100
      </PaginationItem>,
    );
  } else if (page > MAX_PAGE - PAGES_PER_PAGINATION + 1) {
    pagination.push(
      <PaginationItem as={NavLink} to="/1" key="1">
        1
      </PaginationItem>,
    );
    pagination.push(<PaginationItem key="separator">...</PaginationItem>);
    for (let pageNumber = PAGES_PER_PAGINATION - 1; pageNumber >= 0; pageNumber--) {
      pagination.push(
        <PaginationItem as={NavLink} to={`/${MAX_PAGE - pageNumber}`} key={MAX_PAGE - pageNumber}>
          {MAX_PAGE - pageNumber}
        </PaginationItem>,
      );
    }
  } else {
    pagination.push(
      <PaginationItem as={NavLink} to="/1" key="1">
        1
      </PaginationItem>,
    );
    pagination.push(<PaginationItem key="separator1">...</PaginationItem>);
    for (
      let pageNumber = page - Math.floor((PAGES_PER_PAGINATION - 1) / 2);
      pageNumber <= page + Math.floor((PAGES_PER_PAGINATION - 1) / 2);
      pageNumber++
    ) {
      pagination.push(
        <PaginationItem as={NavLink} to={`/${pageNumber}`} key={pageNumber}>
          {pageNumber}
        </PaginationItem>,
      );
    }
    pagination.push(<PaginationItem key="separator2">...</PaginationItem>);
    pagination.push(
      <PaginationItem as={NavLink} to="/100" key="100">
        100
      </PaginationItem>,
    );
  }

  return (
    <PaginationContainer>
      {pagination.map((item) => {
        return item;
      })}
    </PaginationContainer>
  );
};

ReposPagination.propTypes = {
  page: PropTypes.number.isRequired,
};

export default ReposPagination;
