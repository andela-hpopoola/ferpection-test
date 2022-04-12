import Image from 'next/image';
import React from 'react';
import { ICraftable } from '@/utils/types';
import classNames from 'classnames';

interface Props extends ICraftable {
  selected: boolean;
  onClick: () => void;
}

export default function Item({
  imageURL,
  name,
  count,
  selected,
  onClick,
}: Props) {
  return (
    <label
      id={`item-${name}`}
      className={classNames(
        'relative flex h-20 p-2 my-4 overflow-hidden bg-white border border-gray-200 rounded-md',
        { 'bg-sky-100': selected }
      )}
    >
      <div className="bg-gray-200">
        <Image
          src={imageURL}
          alt={name}
          className="object-cover object-center w-32 h-32 lg:w-full"
          width="64"
          height="64"
        />
      </div>
      <div className="py-3 pl-2">
        <h3 className="text-xs font-bold text-sky-700">{name}</h3>
        <h3 className="text-xs font-bold text-gray-700">
          <span className="font-extrabold">x</span>
          {count}
        </h3>
      </div>
      <input
        type="checkbox"
        className="absolute top-8 right-5"
        onChange={onClick}
      />
    </label>
  );
}
