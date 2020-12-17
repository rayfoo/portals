import React from 'react';

type props = {
  children: React.ReactNode;
  styles?: string;
};

export function Bubble({ children, styles = '' }: props) {
  return (
    <div className={`bg-gray-100 rounded-tl-none ${styles}`}>{children}</div>
  );
}

export function PostBubble({ children, styles = '' }: props) {
  return <Bubble styles={`p-5 rounded-2xl ${styles}`}>{children}</Bubble>;
}

export function EmbeddedBubble({ children, styles = '' }: props) {
  return (
    <Bubble
      styles={`p-3 rounded-xl border-2 border-solid border-gray-300 cursor-pointer hover:bg-blue-50 hover:border-blue-600 ease-in duration-300 transition-color ${styles}`}
    >
      {children}
    </Bubble>
  );
}
