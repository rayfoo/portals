import React, { FunctionComponent } from 'react';

type TextProps = {
  children: React.ReactNode;
  styles?: string;
  clickable?: boolean;
  invert?: boolean;
};

function Text({
  children,
  styles = '',
  clickable = false,
  invert = false,
}: TextProps) {
  const cursorStyle = clickable ? 'cursor-pointer' : 'cursor-auto';
  const invertStyle = invert ? 'text-white' : '';

  return (
    <p
      className={`m-0 p-0 text-base antialiased subpixel-antialised leading-relaxed ${cursorStyle} ${invertStyle} ${styles}`}
    >
      {children}
    </p>
  );
}

export function Title({ children, styles = '', ...rest }: TextProps) {
  return (
    <Text styles={`font-semibold text-gray-900 ${styles}`} {...rest}>
      {children}
    </Text>
  );
}

export function Body({ children, styles = '', ...rest }: TextProps) {
  return (
    <Text styles={`font-normal text-gray-900 ${styles}`} {...rest}>
      {children}
    </Text>
  );
}

export function Byline({ children, styles = '', ...rest }: TextProps) {
  return (
    <Text styles={`font-normal text-gray-400 ${styles}`} {...rest}>
      {children}
    </Text>
  );
}

export function Minion({ children, styles = '', ...rest }: TextProps) {
  return (
    <Text styles={`text-sm font-semibold text-gray-400 ${styles}`} {...rest}>
      {children}
    </Text>
  );
}
