import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { setSearchField } from '../../../core/actions';
import SearchContainer from './Search.styled';

const Search = (props) => {
  const { searchField, setSearchField } = props;

  return (
    <SearchContainer>
      <DebounceInput
        minLength={2}
        debounceTimeout={1000}
        placeholder="Search..."
        onChange={(e) => setSearchField(e.target.value)}
        value={searchField}
      />
    </SearchContainer>
  );
};

Search.propTypes = {
  searchField: PropTypes.string.isRequired,
  setSearchField: PropTypes.func.isRequired,
};

const mapStateToProps = ({ searchField }) => ({
  searchField,
});

const mapDispatchToProps = { setSearchField };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
