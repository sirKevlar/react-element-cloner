import React, { cloneElement } from 'react';

export default function Breakfast({ children, overwrite }) {
  let clonedChildren;
  const childrenArr = React.Children.toArray(children);

  clonedChildren = childrenArr.map((child) => {
    return cloneElement(child, { foodName: overwrite });
  });
  
  return overwrite ? <div>{clonedChildren}</div> : <div>{children}</div>;
}
