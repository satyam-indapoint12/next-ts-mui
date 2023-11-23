import * as React from 'react';
import type { Metadata, NextPage, ResolvingMetadata } from 'next';
import { useEffect } from 'react';
import { getProduct, getProductDetail } from '../../stores/home-actions';
import { useProduct } from '../../stores/home-store';
import Product from '../../components/home/product'
import { useRouter } from 'next/router';


const ProductContainer: NextPage = (props: any) => {

    const { result, error } = props

    if(error){
      return <>404</>
    }

    
    return <Product {...result}/>
}

export async function getServerSideProps({ params }: any) {

  const { result }: any = await getProductDetail(params.id); 
  const metaData = {
    title: result?.title || '',
    description: result?.body || '',
    image: result?.image || '',
    url: result?.Url || '',
  }

  return {
    props: {
      id: params.id,
      result,
      metaData
    }
  };
}


export default ProductContainer;