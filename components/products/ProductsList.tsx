import React from 'react';
import { filterProducts } from '@/utils/helpers';
import { Filter, IProductsList } from '@/utils/types';
import FilterCheckbox from '../forms/FilterCheckbox';
import Product from './Product';

function Products({ products }: IProductsList) {
  const [filters, setFilters] = React.useState({
    [Filter.Owned]: false,
    [Filter.NotOwned]: false,
    [Filter.Craftable]: false,
  });

  const updateFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((filters) => ({
      ...filters,
      [event.target.name]: event.target.checked,
    }));
  };

  const currentProducts = filterProducts(products, filters);

  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
      <section className="flex">
        <div className="w-1/2">
          <h1 className="mb-10 text-3xl font-bold text-sky-900">Store</h1>
        </div>
        <div className="flex justify-end w-1/2">
          <div>
            <h4 className="mb-2 text-sm font-bold text-sky-900">Filter By</h4>
            <div className="flex -ml-3">
              {Object.values(Filter).map((key) => (
                <FilterCheckbox key={key} name={key} onChange={updateFilter} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {currentProducts.map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
