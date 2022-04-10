import type { NextPage } from 'next';
import ProductsList from '@/components/products/ProductsList';
import { getAPIData } from '@/utils/api';
import { IProductsList } from '@/utils/types';
import Content from '@/components/layouts/Content';

const Home: NextPage<IProductsList> = ({ products }: IProductsList) => {
  return (
    <Content>
      <ProductsList products={products} />
    </Content>
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
