import React from 'react';
import ItemList from '../items/ItemList';

type Props = {
  children: React.ReactNode;
};

function Content({ children }: Props) {
  return (
    <section className="relative min-w-full min-h-screen bg-sky-100">
      <div className="container flex flex-col py-16 mx-auto md:flex-row">
        <div className="w-full lg:w-3/4 md:w-3/5">{children}</div>
        <div className="w-full lg:w-1/4 md:w-2/5">
          <ItemList />
        </div>
      </div>
    </section>
  );
}

export default Content;
