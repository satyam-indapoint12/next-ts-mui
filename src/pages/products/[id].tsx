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
    description: result?.description || '',
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

  export async function generateMetadata(
    { params }: any,
    parent?: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.id
       const product = await fetch(`http://localhost:8081/products/jenlooper-cactus`).then((res) => res.json())
   
    return {
      title: product.title,
      
    }
  }
   
export default ProductContainer;