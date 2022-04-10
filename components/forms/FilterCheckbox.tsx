import React, { ChangeEventHandler } from 'react';

type Props = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function FilterCheckbox({ name, onChange }: Props) {
  return (
    <label
      htmlFor={name}
      className="relative px-4 py-2 ml-3 text-sm text-gray-600 bg-white rounded-sm"
    >
      <input
        id={name}
        aria-describedby="comments-description"
        name={name}
        type="checkbox"
        className="w-3 h-3 border-gray-300 rounded"
        onChange={onChange}
      />{' '}
      {name}
    </label>
  );
}

export default FilterCheckbox;
