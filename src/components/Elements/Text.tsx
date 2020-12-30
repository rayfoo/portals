import React from 'react';

type TextProps = {
  children: React.ReactNode;
  className?: string;
  clickable?: boolean;
  invert?: boolean;
  [x: string]: any;
};

function Text({
  children,
  className = '',
  clickable = false,
  invert = false,
  ...rest
}: TextProps) {
  const cursorStyle = clickable ? 'cursor-pointer' : 'cursor-auto';
  const invertStyle = invert ? 'text-white' : '';

  return (
    <p
      className={`m-0 p-0 antialiased subpixel-antialised ${cursorStyle} ${invertStyle} ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}

export function Heading({ children, className = '', ...rest }: TextProps) {
  return (
    <Text
      className={`text-xl font-semibold text-gray-800 ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

export function Title({ children, className = '', ...rest }: TextProps) {
  return (
    <Text
      className={`text-sm lg:text-base font-semibold text-gray-800 ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

export function BodyTitle({ children, className = '', ...rest }: TextProps) {
  return (
    <Text
      className={`text-sm lg:text-base font-medium text-gray-800 leading-snug lg:leading-normal wrap-body ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

export function Body({ children, className = '', ...rest }: TextProps) {
  return (
    <Text
      className={`text-sm lg:text-base font-normal text-gray-800 leading-normal wrap-body ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

export function Byline({ children, className = '', ...rest }: TextProps) {
  return (
    <Text
      className={`text-sm lg:text-base font-normal text-gray-500 ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

export function Minion({ children, className = '', ...rest }: TextProps) {
  return (
    <Text
      className={`text-xs font-semibold text-gray-400 ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
}
