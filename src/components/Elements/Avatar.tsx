import React from 'react';

type props = {
  url: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  style?: string;
};

export function Avatar({ url, alt, style, size = 'md' }: props) {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  };

  return (
    <img
      className={`inline-block ${sizes[size]} rounded-full ${style}`}
      src={url}
      alt={alt}
    />
  );
}
