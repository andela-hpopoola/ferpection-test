import store from 'store2';
import { Filter, IProduct, IFilter, IMaterial, ICraftable, ISelectedItems } from './types';

const FS_QUANTITY = 'FS_QUANTITY';
const FS_CART = 'FS_CART';

export const storeQuantity = (id:number, quantity: number) => {
  const currentStoreQuantity = store(FS_QUANTITY) || {};
  const newStoreQuantity = { ...currentStoreQuantity, [id]: quantity };
  store(FS_QUANTITY, newStoreQuantity);
}

export const getQuantity = (id: number) => {
 return store(FS_QUANTITY)?.[id] || 0;
}

export const getCart = () => {
  return store(FS_CART) || {};
 }

export const getSingleItemFromCart = (id:number) => {
  return store(FS_CART)?.[id] || null;
}

export const addSingleItemToCart = ({id, name, count, imageURL}: ICraftable) => {
  const currentCart = getCart();
  const prevQuantity = getSingleItemFromCart(id)?.count|| 0;
  const quantity = prevQuantity + count;
  const newCart = { ...currentCart, [id]: { id, name, imageURL, count: quantity } };
  store(FS_CART, newCart);
}

export const clearCart = () => store.remove(FS_CART);

export const addItemsToCart = (craftables: ICraftable[]) => {
  craftables.map((craftable) => {
    addSingleItemToCart(craftable);
  })
}

export const buyProducts = (selectedItems: ISelectedItems) => {
  const cart = getCart();
  Object.entries(selectedItems).map(([idx,count]) => {
    const id = Number(idx);
    storeQuantity(id,  getQuantity(id) + count);
    delete cart[id];
  })

  store(FS_CART, cart);
  return cart;
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
