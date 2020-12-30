import React from 'react';

type props = {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg';
  className?: string;
  roundedFull?: boolean;
};

export function PrimaryButton({
  children,
  size = 'base',
  roundedFull = false,
  className,
  ...rest
}: props) {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm font-medium',
    base: 'px-5 py-2 text-base font-medium',
    lg: 'px-6 py-2.5 text-lg font-medium',
  };

  const isRounded = roundedFull ? 'rounded-full' : null;

  return (
    <div className="inline-flex rounded-md shadow">
      <button
        className={`inline-flex items-center justify-center border border-transparent rounded-md text-white bg-blue-700 hover:bg-blue-600 ${sizes[size]} ${isRounded} ${className}`}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
}
