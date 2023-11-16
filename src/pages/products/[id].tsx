import * as React from 'react';
import type { NextPage } from 'next';
import { getProductDetail } from '../../stores/home-actions';
import Product from '../../components/home/product';

const ProductContainer: NextPage = (props: any) => {
  const { result, error } = props;

  if (error) {
    return <>404</>;
  }

  return <Product {...result} />;
};

export async function getServerSideProps({ params }: any) {
  const { result }: any = await getProductDetail(params.id);
  const metaData = {
    title: result?.title || '',
    description: result?.description || '',
    image: result?.image || '',
    url: result?.Url || '',
  };

  return {
    props: {
      id: params.id,
      result,
      metaData,
    },
  };
}

export default ProductContainer;
