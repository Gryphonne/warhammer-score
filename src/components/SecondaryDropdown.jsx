import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './styles/secondaryDropdown.css';

export default function ControllableStates() {
  const [mission, setMission] = useState(null);

  return (
    <div className="mission-text">
      <div className="mission-text">{(mission !== null) ? `${mission.category} : ${mission.description}` : 'Select a Secondary Objective'}</div>
      <Autocomplete
      className="secondary-dropdown__input"
        disablePortal
        id="combo-box-demo"
        options={Object.values(SECONDARY_OBJECTIVES)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} />}
        mission={mission}
        onChange={(event, newMission) => {
          setMission(newMission);
        }}
      />
    </div>
  );
}

const SECONDARY_OBJECTIVES = [
  {
    category: "Battlefield Supremacy",
    label: "Engage on All Fronts",
    description: "Score 2VP at the end of your turn if you have one or more units from your army wholly within three different table quarters, and those units are all more than 6\" from the centre of the battlefield. Score 3VP instead if you have one or more units from your army wholly within each table quarter, and those units are all more than 6\" from the centre of the battlefield."
  },
  {
    category: "No Mercy no Respite",
    label: "Grind them Down",
    description: ""
  },
  {
    category: "Shadow Operations",
    label: "Raise the Banners High",
    description: ""
  },
  {
    category: "Purge the Enemy",
    label: "Assassination",
    description: ""
  },
  {
    category: "Warpcraft",
    label: "Abhor the Witch",
    description: ""
  },
]