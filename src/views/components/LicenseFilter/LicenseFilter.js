import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setLicenseFilter } from '../../../core/actions';

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

    &:hover {
      color: blue;
    }
  }
`;

const LicenseFilter = (props) => {
  const { licenseFilter, setLicenseFilter } = props;
  const [isOpened, setIsOpened] = useState(false);
  const filterItems = {
    'afl-3.0': 'Academic Free License v3.0',
    'apache-2.0': 'Apache license 2.0',
    'artistic-2.0': 'Artistic license 2.0',
    'bsl-1.0': 'Boost Software License 1.0',
    'bsd-2-clause': 'BSD 2-clause "Simplified" license',
    'bsd-3-clause': 'BSD 3-clause "New" or "Revised" license',
    'bsd-3-clause-clear': 'BSD 3-clause Clear license',
    cc: 'Creative Commons license family',
    'cc0-1.0': 'Creative Commons Zero v1.0 Universal',
    'cc-by-4.0': 'Creative Commons Attribution 4.0',
    'cc-by-sa-4.0': 'Creative Commons Attribution Share Alike 4.0',
    wtfpl: 'Do What The F*ck You Want To Public License',
    'ecl-2.0': 'Educational Community License v2.0',
    'epl-1.0': 'Eclipse Public License 1.0',
    'eupl-1.1': 'European Union Public License 1.1',
    'agpl-3.0': 'GNU Affero General Public License v3.0',
    gpl: 'GNU General Public License family',
    'gpl-2.0': 'GNU General Public License v2.0',
    'gpl-3.0': 'GNU General Public License v3.0',
    lgpl: 'GNU Lesser General Public License family',
    'lgpl-2.1': 'GNU Lesser General Public License v2.1',
    'lgpl-3.0': 'GNU Lesser General Public License v3.0',
    isc: 'ISC',
    'lppl-1.3c': 'LaTeX Project Public License v1.3c',
    'ms-pl': 'Microsoft Public License',
    mit: 'MIT',
    'mpl-2.0': 'Mozilla Public License 2.0',
    'osl-3.0': 'Open Software License 3.0',
    postgresql: 'PostgreSQL License',
    'ofl-1.1': 'SIL Open Font License 1.1',
    ncsa: 'University of Illinois/NCSA Open Source License',
    unlicense: 'The Unlicense',
    zlib: 'zLib License',
  };

  return (
    <LicenseFilterContainer>
      <div
        className={licenseFilter ? 'selected active' : 'selected'}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        {licenseFilter ? filterItems[licenseFilter] : 'Select license...'}
      </div>
      <div className={isOpened ? 'select-list opened' : 'select-list'}>
        {Object.keys(filterItems).map((key) => {
          return (
            <div
              className="select-item"
              onClick={() => {
                setLicenseFilter(key);
                setIsOpened(false);
              }}
              key={key}
            >
              {filterItems[key]}
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

export default connect(mapStateToProps, mapDispatchToProps)(LicenseFilter);
