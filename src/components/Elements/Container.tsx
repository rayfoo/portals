import React from 'react';

type props = {
  children: React.ReactNode;
};

export function Container({ children }: props) {
  return <div className="px-2 max-w-2xl md:ml-80 lg:ml-96">{children}</div>;
}
