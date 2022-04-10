import Image from 'next/image';
import React from 'react';
import { IProduct } from 'utils/types';

export default function Product({ id, imageURL, name }: IProduct) {
  return (
    <div className="group relative border rounded-lg border-gray-200">
      <div className="w-full bg-gray-200 rounded-t-lg overflow-hidden group-hover:opacity-75">
        <Image
          src={imageURL}
          alt={name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          width="256"
          height="256"
        />
      </div>
      <div className="py-4 px-4 flex justify-between rounded-b-lg bg-white">
        <div>
          <a
            href={`products/${id}`}
            className="text-md font-bold text-sky-700 group-hover:text-red-600 transistion-all"
          >
            {name}
          </a>
        </div>
      </div>
    </div>
  );
}
