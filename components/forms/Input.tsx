import React, { ChangeEventHandler } from 'react';

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  value: number;
};

function Input({ type, onChange, value }: Props) {
  return (
    <input
      type={type}
      className="inline-block w-20 h-full pl-6 pr-4 font-semibold text-center text-gray-600 transition-all border-2 border-gray-400 outline-none hover:border-sky-600 focus:outline-none text-md"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
