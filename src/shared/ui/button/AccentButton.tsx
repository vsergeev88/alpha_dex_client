import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

type TProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const AccentButton: React.FC<PropsWithChildren<TProps>> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={`btn btn-accent grow btn-wide text-2xl btn-lg ${className}`}
    >
      {children}
    </button>
  );
};
