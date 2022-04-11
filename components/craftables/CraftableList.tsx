import React from 'react';
import { ICraftable } from '@/utils/types';
import Craftable from './Craftable';
import Button from '../forms/Button';
import { craftProduct } from '@/utils/helpers';
import { useRouter } from 'next/router';

function CraftableList({
  id,
  products,
}: {
  id: number;
  products: ICraftable[];
}) {
  const router = useRouter();
  const handleCrafting = (id: number, products: ICraftable[]) => {
    craftProduct(id, products);
    router.push('/');
  };
  return (
    <>
      {products.length > 0 && (
        <>
          <h6 className="w-full mt-16 mb-3 text-sm font-semibold text-teal-700">
            Need to Craft
          </h6>

          <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <Craftable key={product.name} {...product} />
            ))}
          </div>

          <div className="mt-5 text-right">
            <Button onClick={() => handleCrafting(id, products)}>Craft</Button>
          </div>
        </>
      )}
    </>
  );
}

export default CraftableList;
