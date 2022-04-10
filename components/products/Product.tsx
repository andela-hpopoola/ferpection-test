import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getQuantity } from '@/utils/helpers';
import { IProduct } from '@/utils/types';
import ProductStockStatus from './ProductStockStatus';

export default function Product({ id, imageURL, name }: IProduct) {
  const quantity = getQuantity(id);
  return (
    <Link href={`/product/${id}`} passHref>
      <a className="relative transition-all border border-gray-200 rounded-lg group">
        <div className="w-full overflow-hidden bg-gray-200 rounded-t-lg group-hover:opacity-75">
          <Image
            src={imageURL}
            alt={name}
            className="object-cover object-center w-full h-full lg:w-full lg:h-full"
            width="256"
            height="256"
          />
        </div>
        <div className="flex justify-between px-4 py-4 bg-white rounded-b-lg">
          <h3 className="w-2/3 overflow-hidden font-bold text-teal-700 text-ellipsis text-md group-hover:text-red-600">
            {name}
          </h3>
          <p className="w-1/3 pt-1 text-xs text-right text-gray-400 group-hover:text-teal-600">
            <ProductStockStatus quantity={quantity} />
          </p>
        </div>
      </a>
    </Link>
  );
}
