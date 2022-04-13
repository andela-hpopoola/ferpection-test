import type { NextPage } from 'next';
import { getAPIData } from '@/utils/api';
import { ICraftable, IProduct } from '@/utils/types';
import Image from 'next/image';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import ProductForm from '@/components/products/ProductForm';
import Content from '@/components/layouts/Content';
import CraftStatus from '@/components/craftables/CraftStatus';
import CraftableList from '@/components/craftables/CraftableList';
import Link from 'next/link';

interface Props {
  product: IProduct;
  craftableProducts: ICraftable[] | [];
}

const SingleProduct: NextPage<Props> = ({
  product: { id, name, imageURL, materials },
  craftableProducts,
}: Props) => {
  return (
    <Content>
      <section className="px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <main className="my-8">
          <Breadcrumb name={name} />
          <h1 className="my-2 text-3xl text-sky-500">{name}</h1>
          <section className="container p-8 pb-6 mx-auto bg-white rounded-lg">
            <div className="flex flex-col lg:flex-row">
              <section className="w-full lg:w-1/4">
                <div className="bg-gray-200 rounded-lg">
                  <Image
                    src={imageURL}
                    alt={name}
                    className="object-cover w-full h-full max-w-lg mx-auto rounded-md"
                    width="256"
                    height="256"
                  />
                </div>
              </section>
              <section className="relative w-full mx-auto mt-5 lg:ml-8 lg:mt-0 lg:w-3/4">
                <CraftStatus materials={materials} position="right-0 top-0" />
                <label
                  htmlFor="custom-input-number"
                  className="w-full text-sm font-semibold text-teal-700"
                >
                  Quantity
                </label>
                <div className="flex mt-3">
                  <ProductForm id={id} />
                </div>
                <CraftableList id={id} products={craftableProducts} />
              </section>
            </div>
          </section>
          <footer className="mt-5">
            <Link href="/" passHref>
              <a className="pt-3 text-xl font-medium text-gray-400 hover:text-gray-500">
                &larr; Back
              </a>
            </Link>
          </footer>
        </main>
      </section>
    </Content>
  );
};

export default SingleProduct;

export async function getStaticProps({ params }: { params: { id: String } }) {
  const products: IProduct[] = await getAPIData('/api/products');

  const product = products.find((p) => p.id.toString() === params.id);
  const craftableProducts: IProduct[] | [] =
    product?.materials.map(({ productID, count }) => ({
      ...products[productID - 1],
      count,
    })) || [];
  return { props: { product, craftableProducts } };
}

export async function getStaticPaths() {
  const products: IProduct[] | [] = await getAPIData('/api/products');

  return {
    paths: products.map((product: IProduct) => {
      return {
        params: {
          id: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
}
