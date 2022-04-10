import React from 'react';

function ProductStockStatus({ quantity }: { quantity: number }) {
  return quantity > 0 ? (
    <>
      <span className="font-bold text-teal-700">{quantity}</span> in Stock
    </>
  ) : (
    <>
      <span className="font-bold text-danger-700">Out</span> of Stock
    </>
  );
}

export default ProductStockStatus;
