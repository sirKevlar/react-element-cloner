import React, { cloneElement } from 'react';
import { useState } from 'react';

export default function ToggleInputs({ children }) {
  let clonedChildren;
  const [areEnabled, setAreEnabled] = useState(true);
  const childrenArr = React.Children.toArray(children);
  clonedChildren = childrenArr.map((child) => {
    return cloneElement(child, { disabled: true });
  });

  return (
    <div>
      {areEnabled ? children : clonedChildren}
      <button
        onClick={() => {
          setAreEnabled(!areEnabled);
        }}
      >
        disable
      </button>
    </div>
  );
}
