import React from 'react';
import ItemList from '../items/ItemList';

type Props = {
  children: React.ReactNode;
};

function Content({ children }: Props) {
  return (
    <section className="min-h-screen bg-sky-100">
      <div className="container flex py-16 mx-auto">
        <div className="w-3/4">{children}</div>
        <div className="w-1/4">
          <ItemList />
        </div>
      </div>
    </section>
  );
}

export default Content;
