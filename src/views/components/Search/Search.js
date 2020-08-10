import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { setSearchField } from '../../../core/actions';

const SearchContainer = styled.div`
  width: 280px;
  height: 40px;
  margin-top: 20px;

  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 4px;
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 0.8rem;

    &::placeholder {
      font-size: 0.8rem;
      line-height: 100%;
      color: gray;
    }
  }
`;

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
