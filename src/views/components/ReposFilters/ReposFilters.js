import React from 'react';
import LicenseFilter from '../LicenseFilter';
import Search from '../Search';
import ReposFilterContainer from './ReposFilters.styled';

const ReposFilters = () => {
  return (
    <ReposFilterContainer>
      <LicenseFilter />
      <Search />
    </ReposFilterContainer>
  );
};

export default ReposFilters;
