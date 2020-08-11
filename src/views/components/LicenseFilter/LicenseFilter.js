import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from '../../../core/utils';
import { withApiService } from '../../../core/hocs';
import { setLicenseFilter } from '../../../core/actions';
import LicenseFilterContainer from './LicenseFilter.styled';

const LicenseFilter = (props) => {
  const { licenseFilter, setLicenseFilter, apiService } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [filterItems, setFilterItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('Select license...');
  const [, setError] = useState();

  useEffect(() => {
    apiService
      .getLicensesList()
      .then((res) => {
        setFilterItems(res);
        if (licenseFilter) {
          setSelectedItem(res.filter((item) => item.key === licenseFilter)[0].name);
        }
      })
      .catch((e) => {
        console.log(e);
        setError(() => {
          throw new Error(`${e.status} ${e.statusText}`);
        });
      });
  }, [apiService, setFilterItems, filterItems, licenseFilter]);

  const handleClickFilter = () => {
    setIsOpened(!isOpened);
  };

  return (
    <LicenseFilterContainer>
      <div className={licenseFilter ? 'selected active' : 'selected'} onClick={handleClickFilter}>
        {selectedItem}
      </div>
      <div className={isOpened ? 'select-list opened' : 'select-list'}>
        <div
          className="select-item"
          onClick={() => {
            setLicenseFilter('');
            setIsOpened(false);
          }}
        >
          Clear license
        </div>
        {filterItems.map((item) => {
          return (
            <div
              className="select-item"
              onClick={() => {
                setLicenseFilter(item.key);
                setIsOpened(false);
              }}
              key={item.key}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </LicenseFilterContainer>
  );
};

LicenseFilter.propTypes = {
  licenseFilter: PropTypes.string.isRequired,
  setLicenseFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ licenseFilter }) => ({
  licenseFilter,
});

const mapDispatchToProps = { setLicenseFilter };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withApiService(),
)(LicenseFilter);
