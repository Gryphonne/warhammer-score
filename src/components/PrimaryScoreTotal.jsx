import { Box, Container } from '@mui/material';
import React, { useContext } from 'react';

import './styles/totalScoreFormatting.css'

import { PrimaryScoreContext } from '../context/PrimaryScoreContext';
import { CountertopsOutlined } from '@mui/icons-material';

const PrimaryScoreTotal = () => {
    const [count] = useContext(PrimaryScoreContext);

    return (
        <h4 className="h2-tot">{count}/45</h4>
    );
}

export default PrimaryScoreTotal;