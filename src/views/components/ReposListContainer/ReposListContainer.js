import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from '../../../core/utils';
import config from '../../../config';
import { withApiService } from '../../../core/hocs';
import { fetchReposRequest, fetchReposSuccess, fetchReposFailure } from '../../../core/actions';
import Container from '../Container';
import Loader from '../Loader';
import ReposFilters from '../ReposFilters';
import ReposList from '../ReposList';
import ReposPagination from '../ReposPagination';

const ReposListContainer = (props) => {
  const { pageNumber = '1' } = props.match.params;
  const [, setError] = useState();
  const [maxPage, setMaxPage] = useState(1);
  //props
  const { isLoading, repos, searchField, licenseFilter } = props;
  //dispatchers
  const { fetchReposRequest, fetchReposSuccess } = props;
  //api
  const { apiService } = props;

  useEffect(() => {
    fetchReposRequest();
    apiService
      .getReposList(pageNumber, searchField, licenseFilter)
      .then((res) => {
        if (res.total_count < config.maxSearchResults) {
          setMaxPage(Math.ceil(res.total_count / config.itemsPerPage));
        } else {
          setMaxPage(Math.ceil(config.maxSearchResults / config.itemsPerPage));
        }
        fetchReposSuccess(res.items);
      })
      .catch((e) => {
        fetchReposFailure(`${e.status} ${e.statusText}`);
        setError(() => {
          throw new Error(`${e.status} ${e.statusText}`);
        });
      });
  }, [apiService, searchField, licenseFilter, fetchReposRequest, fetchReposSuccess, pageNumber]);

  if (props.match.params.pageNumber === '1') {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <ReposFilters />
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <ReposList repos={repos} />
          <ReposPagination page={parseInt(pageNumber)} maxPage={maxPage} />
        </React.Fragment>
      )}
    </Container>
  );
};

ReposListContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  searchField: PropTypes.string.isRequired,
  licenseFilter: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchReposRequest: PropTypes.func.isRequired,
  fetchReposSuccess: PropTypes.func.isRequired,
  fetchReposFailure: PropTypes.func.isRequired,
};

const mapStateToProps = ({ repos, isLoading, searchField, licenseFilter }) => ({
  repos,
  isLoading,
  searchField,
  licenseFilter,
});

const mapDispatchToProps = { fetchReposRequest, fetchReposSuccess, fetchReposFailure };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withApiService(),
)(ReposListContainer);
