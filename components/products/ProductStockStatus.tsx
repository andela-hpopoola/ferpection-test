import React from 'react';

function ProductStockStatus({ quantity }: { quantity: number }) {
  return quantity > 0 ? (
    <>
      <span className="font-bold text-teal-700">{quantity}</span> in Stock
    </>
  ) : (
    <>Out of Stock</>
  );
}

export default ProductStockStatus;
