import React from 'react';

type props = {
  children: React.ReactNode;
  [x: string]: any;
};

export function Container({ children, ...rest }: props) {
  return (
    <div className="px-2 max-w-2xl lg:ml-80" {...rest}>
      {children}
    </div>
  );
}
