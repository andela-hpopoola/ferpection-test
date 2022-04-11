import store from 'store2';
import { Filter, IProduct, IFilter, IMaterial, ICraftable } from './types';

const FS_QUANTITY = 'FS_QUANTITY';

export const storeQuantity = (id:number, quantity: number) => {
  const currentStoreQuantity = store(FS_QUANTITY) || {};
  const newStoreQuantity = { ...currentStoreQuantity, [id]: quantity };
  store(FS_QUANTITY, newStoreQuantity);
}

export const getQuantity = (id: number) => {
 return store(FS_QUANTITY)?.[id] || 0;
}


export const craftProduct = (id: number, products: ICraftable[]) => {
  const productQty = getQuantity(id);
  storeQuantity(id, productQty + 1);

  products.map(({id: idx, count}) => {
    const quantity = getQuantity(idx);
    storeQuantity(idx, Math.max(quantity - count, 0));
  })
}


export const isOwnedProperty = (id: number)  => getQuantity(id) > 0;
export const isNotOwnedProperty = (id: number)  => getQuantity(id) === 0;
export const isCraftable = (materials: IMaterial[])  => materials.length > 0;

export const filterProducts = (products: IProduct[], filters: IFilter) => {
  return products.filter((product) => {
    const { id } = product;
    const noFilter =
      !filters[Filter.Owned] &&
      !filters[Filter.NotOwned] &&
      !filters[Filter.Craftable];

    const isOwnedFilter = filters[Filter.Owned] && isOwnedProperty(id);
    const isNotOwnedFilter = filters[Filter.NotOwned] && isNotOwnedProperty(id);
    const isCraftableFilter =
      filters[Filter.Craftable] && isCraftable(product.materials);

    return noFilter || isOwnedFilter || isNotOwnedFilter || isCraftableFilter;
  });
}
