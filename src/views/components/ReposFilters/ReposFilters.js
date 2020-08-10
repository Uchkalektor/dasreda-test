import React from 'react';
import styled from 'styled-components';
import LicenseFilter from '../LicenseFilter';
import Search from '../Search';

const ReposFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const ReposFilters = () => {
  return (
    <ReposFilterContainer>
      <LicenseFilter />
      <Search />
    </ReposFilterContainer>
  );
};

export default ReposFilters;
