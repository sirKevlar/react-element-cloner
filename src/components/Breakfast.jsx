import React, { cloneElement } from 'react';

export default function Breakfast({ children, overwrite }) {
  let clonedChildren;
  const childrenArr = React.Children.toArray(children);

  clonedChildren = childrenArr.map((child) => {
    console.log(child);
    return overwrite
      ? cloneElement(child, { foodName: overwrite })
      : child;
  });

  return <div>{clonedChildren}</div>;
}
