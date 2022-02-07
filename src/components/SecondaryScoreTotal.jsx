import { Box, Container } from '@mui/material';
import React, { useContext } from 'react';

import './styles/totalScoreFormatting.css'

import { SecondaryScoreContext } from '../context/SecondaryScoreContext';

const SecondaryScoreTotal = () => {
    const [count] = useContext(SecondaryScoreContext);

    return (
        <h4 className="h2-tot">{count}/45</h4>
    );
}

export default SecondaryScoreTotal;