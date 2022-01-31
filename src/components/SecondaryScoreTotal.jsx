import { Box, Container } from '@mui/material';
import React, { useContext } from 'react';

import './styles/scoreFormatting.css'

import { SecondaryScoreContext } from '../context/SecondaryScoreContext';

const SecondaryScoreTotal = () => {
    const [count] = useContext(SecondaryScoreContext);

    return (
        <Container className="flex-tot-container">
            <Box>
                <h4 className="ver-tot hor-tot big-font-tot">{count}/45</h4>
            </Box>
        </Container>
    );
}

export default SecondaryScoreTotal;