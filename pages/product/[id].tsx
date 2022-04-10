import type { NextPage } from 'next';
import { getAPIData } from '@/utils/api';
import { IProduct } from '@/utils/types';
import Image from 'next/image';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import ProductForm from '@/components/products/ProductForm';
import Content from '@/components/layouts/Content';

const SingleProduct: NextPage<IProduct> = ({
  id,
  imageURL,
  name,
}: IProduct) => {
  return (
    <Content>
      <section className="px-12 py-6 bg-white">
        <div className="container flex mx-auto">
          <main className="my-8">
            <Breadcrumb name={name} />
            <h1 className="mt-4 text-3xl text-sky-500">{name}</h1>
            <div className="container mx-auto">
              <div className="md:flex md:items-center">
                <div className="w-full h-64 md:w-1/2">
                  <Image
                    src={imageURL}
                    alt={name}
                    className="object-cover w-full h-full max-w-lg mx-auto rounded-md"
                    width="256"
                    height="256"
                  />
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                  <label
                    htmlFor="custom-input-number"
                    className="w-full text-sm font-semibold text-gray-700"
                  >
                    Quantity
                  </label>
                  <div className="flex mt-3">
                    <ProductForm id={id} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </Content>
  );
};

export default SingleProduct;

export async function getStaticProps({ params }: { params: { id: String } }) {
  const products: IProduct[] = await getAPIData('/api/products');

  const product = products.find((p) => p.id.toString() === params.id);
  return { props: { ...product } };
}

export async function getStaticPaths() {
  const products: IProduct[] = await getAPIData('/api/products');

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
