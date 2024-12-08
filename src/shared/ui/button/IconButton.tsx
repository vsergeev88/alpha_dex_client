import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

type TProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton: React.FC<PropsWithChildren<TProps>> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={`btn btn-circle btn-outline ${className}`}
    >
      {children}
    </button>
  );
};
