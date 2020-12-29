import React from 'react';

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
      className={`m-0 p-0 antialiased subpixel-antialised ${cursorStyle} ${invertStyle} ${styles}`}
    >
      {children}
    </p>
  );
}

export function Heading({ children, styles = '', ...rest }: TextProps) {
  return (
    <Text styles={`text-xl font-semibold text-gray-800 ${styles}`} {...rest}>
      {children}
    </Text>
  );
}

export function Title({ children, styles = '', ...rest }: TextProps) {
  return (
    <Text styles={`text-base font-semibold text-gray-800 ${styles}`} {...rest}>
      {children}
    </Text>
  );
}

export function BodyTitle({ children, styles = '', ...rest }: TextProps) {
  return (
    <Text
      styles={`text-base font-medium text-gray-800 leading-snug md:leading-normal wrap-body ${styles}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

export function Body({ children, styles = '', ...rest }: TextProps) {
  return (
    <Text
      styles={`text-base font-normal text-gray-800 leading-normal wrap-body ${styles}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

export function Byline({ children, styles = '', ...rest }: TextProps) {
  return (
    <Text
      styles={`text-sm md:text-base font-normal text-gray-500 ${styles}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

export function Minion({ children, styles = '', ...rest }: TextProps) {
  return (
    <Text styles={`text-xs font-semibold text-gray-400 ${styles}`} {...rest}>
      {children}
    </Text>
  );
}
