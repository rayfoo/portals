import React from 'react';

type props = {
  children: React.ReactNode;
  className?: string;
};

export function Bubble({ children, className = '' }: props) {
  return <div className={`bg-gray-100 ${className}`}>{children}</div>;
}

export function PostBubble({ children, className = '' }: props) {
  return (
    <Bubble
      className={`py-2 px-3 lg:p-4 rounded-2xl rounded-tl-none shadow-sm ${className}`}
    >
      {children}
    </Bubble>
  );
}

export function EmbeddedBubble({ children, className = '' }: props) {
  return (
    <Bubble
      className={`p-2 rounded-xl border border-solid border-gray-300 cursor-pointer hover:border-gray-400 hover:opacity-60 ease-in duration-200 transition-all ${className}`}
    >
      {children}
    </Bubble>
  );
}
