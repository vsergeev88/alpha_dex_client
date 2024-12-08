import React from 'react';

type TProps = React.InputHTMLAttributes<HTMLInputElement>;

export const AccentInput = React.forwardRef<HTMLInputElement, TProps>(
  ({ className = '', ...inputProps }, ref) => {
    return (
      <input
        ref={ref}
        {...inputProps}
        className={`input input-bordered input-accent input-lg w-full max-w-xs text-2xl ${className}`}
      />
    );
  }
);

AccentInput.displayName = 'AccentInput';
