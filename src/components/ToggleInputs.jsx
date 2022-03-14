import React, { cloneElement } from 'react';
import { useState } from 'react';

export default function ToggleInputs({ children }) {
  let clonedChildren;
  const [isDisabled, setIsDisabled] = useState(false);
  const childrenArr = React.Children.toArray(children);
  clonedChildren = childrenArr.map((child) => {
    return cloneElement(child, { disabled: isDisabled });
  });

  return (
    <div>
      {clonedChildren}
      <button
        onClick={() => {
          setIsDisabled(!isDisabled);
        }}
      >
        disable
      </button>
    </div>
  );
}
