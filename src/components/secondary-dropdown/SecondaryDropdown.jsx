import React from 'react';
import './secondaryDropdown.css';
import { Dropdown } from 'semantic-ui-react'
import SECONDARY_OBJECTIVES from '../../data/secondary.data';

const SecondaryDropdown = () => {(
<Dropdown
      placeholder='Select Secondary Objective'
      fluid
      search
      selection
      options={SECONDARY_OBJECTIVES}
    />
  )
}

export default SecondaryDropdown;