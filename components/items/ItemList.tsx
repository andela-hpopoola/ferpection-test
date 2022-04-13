import React from 'react';
import { ICraftable, IProduct, ISelectedItems } from '@/utils/types';
import { buyProducts, clearCart, getCart } from '@/utils/helpers';
import Item from './Item';
import Button from '../forms/Button';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import useWindowSize from 'hooks/useWindowSize';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

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

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = width && width < 768;

  return (
    <>
      {isMobile && (
        <>
          {isOpen && (
            <div className="absolute top-0 bottom-0 left-0 right-0 transition-all duration-300 ease-in-out bg-gray-800/75 bg-red" />
          )}
          <button
            className="absolute flex p-4 mb-4 text-xs font-medium text-white transition-all bg-teal-500 rounded-lg hover:text-white hover:bg-teal-700 focus:outline-none sm:right-16 top-16 right-3"
            onClick={() => setIsOpen(true)}
          >
            <FaShoppingCart /> &nbsp; Checklist ({checklist.length})
          </button>
        </>
      )}
      <aside
        className={classNames(
          'min-h-screen px-8 py-8 bg-white',
          {
            'fixed top-0 right-0 z-30 w-64 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white':
              isMobile,
          },
          {
            'translate-x-0': isOpen && isMobile,
            'translate-x-full': !isOpen && isMobile,
          }
        )}
      >
        <>
          <div className="flex items-center flex-nowrap">
            <h6 className="w-full my-5 font-semibold text-teal-700 lg:mt-0 grow text-md">
              {isMobile && (
                <button
                  className="absolute flex p-1 text-2xl text-white transition-all bg-gray-500 rounded-lg top-2 right-2 hover:text-white hover:bg-gray-700 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes />
                </button>
              )}
              Item Checklist ({checklist.length})
            </h6>
            <div className="justify-right">
              {checklist.length > 0 && (
                <Button small onClick={handleClearCart}>
                  Reset
                </Button>
              )}
            </div>
          </div>

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
    </>
  );
}

export default ItemList;
