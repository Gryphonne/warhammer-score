import React, { useState, createContext } from 'react';

export const SecondaryTotalContext = createContext();

function SecondaryTotalProvider(props) {
    
    const [secondaryTotal, setSecondaryTotal] = useState(0);

    function incrementSecondaryTotal() {
        setSecondaryTotal(secondaryTotal + 1);
    }

    function decrementSecondaryTotal() {
        setSecondaryTotal(secondaryTotal - 1);
    }

    return(
        <SecondaryTotalContext.Provider value={ secondaryTotal, incrementSecondaryTotal, decrementSecondaryTotal }>
            {props.children}
        </SecondaryTotalContext.Provider>
    )
}

export default SecondaryTotalProvider;