import React, { useState, createContext } from "react";

// Create Context Object
export const PrimaryScoreContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const PrimaryScoreProvider = props => {
  const [count, setCount] = useState(0);

  return (
    <PrimaryScoreContext.Provider value={[count, setCount]}>
      {props.children}
    </PrimaryScoreContext.Provider>
  );
};