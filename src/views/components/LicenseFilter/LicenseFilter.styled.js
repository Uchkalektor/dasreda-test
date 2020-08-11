import styled from 'styled-components';

const LicenseFilterContainer = styled.div`
  margin-top: 20px;
  width: 280px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 4px;
  line-height: 40px;
  padding: 0 4px;
  font-size: 0.8rem;
  position: relative;
  box-sizing: border-box;

  .selected {
    color: gray;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &.active {
      color: black;
    }
  }

  .select-list {
    display: none;
    position: absolute;
    height: 200px;
    width: 100%;
    top: calc(100% + 5px);
    left: 0;
    border: 1px solid gray;
    border-radius: 4px;
    background-color: #fff;
    z-index: 10;
    overflow-y: scroll;
    box-sizing: border-box;

    &.opened {
      display: block;
    }
  }

  .select-item {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      color: blue;
    }
  }
`;

export default LicenseFilterContainer;
