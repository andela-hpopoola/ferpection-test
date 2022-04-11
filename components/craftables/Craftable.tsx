import Image from 'next/image';
import React from 'react';
import { ICraftable } from '@/utils/types';

export default function Craftable({ imageURL, name, count }: ICraftable) {
  return (
    <div className="flex h-16 overflow-hidden border border-gray-300 rounded-sm">
      <div className="bg-gray-200">
        <Image
          src={imageURL}
          alt={name}
          className="object-cover object-center w-32 h-32 lg:w-full"
          width="64"
          height="64"
        />
      </div>
      <div className="py-3 pl-2 bg-white">
        <h3 className="text-xs font-bold text-sky-700">{name}</h3>
        <h3 className="text-xs font-bold text-gray-700">x{count}</h3>
      </div>
    </div>
  );
}
