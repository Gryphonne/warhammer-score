import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './styles/secondaryDropdown.css';

export default function ControllableStates() {
  const [mission, setMission] = useState(null);

  return (
    <div className="mission-text">
      <Autocomplete
        className="secondary-dropdown__input"
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
    category: "Battlefield Supremacy",
    label: "Stranglehold",
    description: "Score 3 victory points at the end of your turn if you control 3 or more objective markers and you also control more objective marker than your opponent controls."
  },
  {
    category: "No Mercy no Respite",
    label: "Grind them Down",
    description: ""
  },
  {
    category: "Shadow Operations",
    label: "Raise the Banners High",
    description: "(Action) Score 1 victory point at the end of each of your Command phases, and 1 victory point at the end of the battle, for each objective marker on the battlefield that has one of your banners raised upon it."
  },
  {
    category: "Purge the Enemy",
    label: "Assassination",
    description: ""
  },
  {
    category: "Purge the Enemy",
    label: "Auric Mortalis (Adeptus Custodes)",
    description: "If you select this objective, then before the battle, you must select one unit from your opponent’s army that has the PRIMARCH or SUPREME COMMANDER keyword to be marked for death. If no such unit exists, select one unit from your opponent’s army with the highest points value to be marked for death."
  },
  {
    category: "Warpcraft",
    label: "Abhor the Witch",
    description: ""
  },
]