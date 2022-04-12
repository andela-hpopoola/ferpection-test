import React from 'react';
import { ICraftable, IProduct, ISelectedItems } from '@/utils/types';
import { buyProducts, clearCart, getCart } from '@/utils/helpers';
import Item from './Item';
import Button from '../forms/Button';
import { useRouter } from 'next/router';

function ItemList() {
  const router = useRouter();
  const currentCart = getCart();
  const checklist: ICraftable[] = Object.values(currentCart);
  const [selectedItems, setSelectedItems] = React.useState<ISelectedItems>({});
  const [cart, setCart] = React.useState<ICraftable[]>(checklist);

  const handleItemSelection = (item: ICraftable) => {
    const currentlySelected = { ...selectedItems };

    if (currentlySelected[item.id]) {
      delete currentlySelected[item.id];
    } else {
      currentlySelected[item.id] = item.count;
    }

    setSelectedItems(() => currentlySelected);
  };

  const handleClearCart = () => {
    clearCart();
    setCart([]);
  };

  const processBoughtItems = () => {
    const cart = buyProducts(selectedItems);
    setCart(Object.values(cart));
    router.push('/');
  };

  return (
    <aside className="min-h-screen px-8 py-4 bg-white">
      <>
        <h6 className="w-full mt-8 mb-3 text-lg font-semibold text-teal-700">
          Item Checklist ({checklist.length})
          {checklist.length > 0 && (
            <span className="text-right">
              <Button small onClick={handleClearCart}>
                Reset
              </Button>
            </span>
          )}
        </h6>

        {checklist.length > 0 ? (
          <div className="">
            {cart.map((item) => {
              return (
                <Item
                  key={item.name}
                  {...item}
                  selected={!!selectedItems[item.id]}
                  onClick={() => handleItemSelection(item)}
                />
              );
            })}
            <div className="mt-5 text-right">
              <Button outline={false} onClick={processBoughtItems}>
                Buy Items
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No Item in Checklist</p>
        )}
      </>
    </aside>
  );
}

export default ItemList;
