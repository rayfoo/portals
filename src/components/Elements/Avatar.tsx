import React from 'react';

type props = {
  url: string;
  alt: string;
  size?: 'sm' | 'base' | 'lg';
  className?: string;
  [x: string]: any;
};

export function Avatar({ url, alt, className, size = 'base', ...rest }: props) {
  const sizes = {
    sm: 'h-6 w-6',
    base: 'h-7 w-7',
    lg: 'h-10 w-10',
  };

  return (
    <img
      className={`inline-block ${sizes[size]} rounded-full ${className}`}
      src={url}
      alt={alt}
      {...rest}
    />
  );
}
