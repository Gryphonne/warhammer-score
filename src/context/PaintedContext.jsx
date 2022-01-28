import React, { useState, createContext } from "react";

// Create Context Object
export const PaintedContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const PaintedProvider = props => {
  const [count, setCount] = useState(0);

  return (
    <PaintedContext.Provider value={[count, setCount]}>
      {props.children}
    </PaintedContext.Provider>
  );
};