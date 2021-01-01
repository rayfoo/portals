import React from 'react';

type props = {
  children: React.ReactNode;
  [x: string]: any;
};

export function Container({ children, ...rest }: props) {
  return (
    <div className="mx-auto py-6 px-4 lg:px-6" {...rest}>
      {children}
    </div>
  );
}
