import styled from 'styled-components';

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

export default SearchContainer;
