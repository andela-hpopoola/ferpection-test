import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

function Pill({ text, onClick }: Props) {
  return (
    <button
      className="w-20 h-full mx-3 text-gray-600 border-2 border-gray-400 rounded-full outline-none cursor-pointer hover:border-sky-700 hover:text-sky-600"
      onClick={onClick}
    >
      <span className="text-2xl font-bold">{text}</span>
    </button>
  );
}

export default Pill;
