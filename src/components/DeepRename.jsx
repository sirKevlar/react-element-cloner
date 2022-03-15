import React from 'react';
import { cloneElement } from 'react';

export default function DeepRename({ children }) {
  const recursiveCloner = (child) => {
    console.log(child.props.children, typeof child.props.children);
    return typeof child.props.children === 'string'
      ? cloneElement(child, { children: 'Kev' })
      : recursiveCloner(child.props.children);
  };

  const childrenArr = React.Children.toArray(children);
  const clonedChildren = childrenArr.map((child) => recursiveCloner(child));

  return (
    <div>
      <div>
        <div>{clonedChildren}</div>
      </div>
    </div>
  );
}
