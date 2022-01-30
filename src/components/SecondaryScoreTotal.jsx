import { Box, Container } from '@mui/material';
import React, { useContext } from 'react';

import './styles/scoreFormatting.css'

import { SecondaryScoreContext } from '../context/SecondaryScoreContext';

const SecondaryScoreTotal = () => {
    const [count] = useContext(SecondaryScoreContext);

    return (
        <Container>
            <Box className="flex-container">
                <h4 className="ver hor big-font">{count}/45</h4>
            </Box>
        </Container>
    );
}

export default SecondaryScoreTotal;