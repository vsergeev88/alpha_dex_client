import React from 'react';

type TProps = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export const AccentInput = React.forwardRef<HTMLInputElement, TProps>(
  ({ className = '', label, ...inputProps }, ref) => {
    return (
      <label className={`form-control w-full max-w-xs ${className}`}>
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          ref={ref}
          {...inputProps}
          className="input input-bordered input-accent input-lg w-full max-w-xs text-2xl"
        />
      </label>
    );
  }
);

AccentInput.displayName = 'AccentInput';
