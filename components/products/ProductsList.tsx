import { IProductsList } from '@/utils/types';
import React from 'react';
import Product from './Product';

function Products({ products }: IProductsList) {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl mb-10 font-bold text-sky-900">Store</h1>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
