import classNames from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
  onClick: () => void;
  small?: boolean;
};

function Button({ children, className, onClick, outline, small }: Props) {
  return (
    <button
      className={classNames(
        'h-10 mb-4 font-medium border-sky-500 transition-all border-2 rounded  hover:text-white hover:bg-sky-600 focus:outline-none',
        {
          'text-sky-600': outline,
          'bg-sky-500 text-white': !outline,
          'px-12 py-2 text-sm h-10': !small,
          'px-6 py-1 text-xs h-8': small,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  outline: true,
  small: false,
};
