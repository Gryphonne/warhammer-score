import React from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

  export default function ControllableStates() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Object.values(SECONDARY_OBJECTIVES)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Secondary Objective" />}
      />
    );
  }
  
  const SECONDARY_OBJECTIVES = [
    {
        id: 1,
        category: "Battlefield Supremacy",
        label: "Engage on All Fronts",
        description: "Score 2 victory points at the end of your turn if you have one or more units from your army wholly within three different table quarters, and those units are all more than 6in from the centre of the battlefield. Score 3 victory points instead if you have one or more units from your army wholly within each table quarter, and those units are all more than 6in from the centre of the battlefield."
    },
    {
        id: 3,
        category: "No Mercy no Respite",
        label: "Grind them Down",
        description: ""
    },    
    {
        id: 4,
        category: "Shadow Operations",
        label: "Raise the Banners High",
        description: ""
    },    
    {
        id: 5,
        category: "Purge the Enemy",
        label: "Assassination",
        description: ""
    },    
    {
        id: 6,
        category: "Warpcraft",
        label: "Abhor the Witch",
        description: ""
    },
]