import styled from 'styled-components';

const ReposPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -4px;
  margin-right: -4px;
`;

const ReposPaginationItem = styled.div`
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

export { ReposPaginationContainer, ReposPaginationItem };
