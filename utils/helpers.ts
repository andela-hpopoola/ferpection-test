import store from 'store2';

const FS_QUANTITY = 'FS_QUANTITY';

export const storeQuantity = (id:number, quantity: number) => {
  const currentStoreQuantity = store(FS_QUANTITY) || {};
  const newStoreQuantity = { ...currentStoreQuantity, [id]: quantity };
  store(FS_QUANTITY, newStoreQuantity);
}

export const getQuantity = (id: number) => {
 return store(FS_QUANTITY)?.[id] || 0;
}
