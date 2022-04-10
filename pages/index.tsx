import type { NextPage } from 'next';
import ProductsList from '@/components/products/ProductsList';
import { getAPIData } from '@/utils/api';
import { IProductsList } from '@/utils/types';

const Home: NextPage<IProductsList> = ({ products }: IProductsList) => {
  return (
    <section className="bg-sky-200">
      <div className="container flex mx-auto py-16">
        <div className="w-3/4">
          <ProductsList products={products} />
        </div>
      </div>
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  const products = await getAPIData('/api/products');

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
