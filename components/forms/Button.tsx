import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: Props) {
  return (
    <button
      className="h-10 px-8 py-2 ml-5 text-sm font-medium transition-all border-2 rounded text-sky-600 border-sky-500 hover:text-white hover:bg-sky-500 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
