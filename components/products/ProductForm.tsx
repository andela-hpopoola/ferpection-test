import React from 'react';
import { useRouter } from 'next/router';
import { getQuantity, storeQuantity } from '@/utils/helpers';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Pill from '../forms/Pill';

type Props = {
  id: number;
};

function ProductForm({ id }: Props) {
  const [counter, setCounter] = React.useState(getQuantity(id) || 0);
  const router = useRouter();

  const updateCounter = (count: number) => {
    const currentValue = count > 0 && !isNaN(count) ? count : 0;
    setCounter(currentValue);
  };

  const handleStoreQuantity = (id: number, quantity: number) => {
    storeQuantity(id, counter);
    router.push('/');
  };

  return (
    <div className="relative flex flex-row w-full h-10 mt-1 -mx-3 bg-transparent rounded-lg">
      <Pill text="-" onClick={() => updateCounter(counter - 1)} />
      <Input
        type="number"
        value={counter}
        onChange={(e) => updateCounter(parseInt(e.target.value, 10))}
      />
      <Pill text="+" onClick={() => updateCounter(counter + 1)} />

      <Button onClick={() => handleStoreQuantity(id, counter)}>Update</Button>
    </div>
  );
}

export default ProductForm;
