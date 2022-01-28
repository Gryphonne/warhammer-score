import React, { useState, createContext } from "react";

// Create Context Object
export const SecondaryScoreContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const SecondaryScoreProvider = props => {
  const [count, setCount] = useState(0);

  return (
    <SecondaryScoreContext.Provider value={[count, setCount]}>
      {props.children}
    </SecondaryScoreContext.Provider>
  );
};