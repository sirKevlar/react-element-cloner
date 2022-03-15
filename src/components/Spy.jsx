import React from 'react';
import { cloneElement } from 'react';

export default function Spy({ children }) {
  const childrenArr = React.Children.toArray(children);
  const clonedChildren = childrenArr.map((child) => {
    return cloneElement(child, {
      onChange: (e) => {
        console.log(e.target.value);
        child.props.onChange(e);
      },
    });
  });

  return <div>{clonedChildren}</div>;
}
