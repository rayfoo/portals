import React from 'react';

type props = {
  children: React.ReactNode;
  styles?: string;
};

export function Bubble({ children, styles = '' }: props) {
  return <div className={`bg-gray-100 ${styles}`}>{children}</div>;
}

export function PostBubble({ children, styles = '' }: props) {
  return (
    <Bubble
      styles={`py-2 px-3 lg:p-4 rounded-2xl rounded-tl-none shadow-sm ${styles}`}
    >
      {children}
    </Bubble>
  );
}

export function EmbeddedBubble({ children, styles = '' }: props) {
  return (
    <Bubble
      styles={`p-2 rounded-xl border border-solid border-gray-300 cursor-pointer hover:border-gray-400 hover:opacity-60 ease-in duration-200 transition-all ${styles}`}
    >
      {children}
    </Bubble>
  );
}
