import * as React from 'react';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getAllProducts } from '../stores/home-actions';
import { useAllProducts } from '../stores/home-store';
import Home from '../components/home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const HomeContainer: NextPage = () => {
    const { products, loading }  = useAllProducts();

    useEffect(() => {
        getAllProducts();
    },[])

    if(loading){
        return <>loading....</>
    }

    return <Home products={products} />
}
export async function getStaticProps(context: any) {
    // extract the locale identifier from the URL
    const { locale } = context
  
    return {
      props: {
        // pass the translation props to the page component
        ...(await serverSideTranslations(locale)),
      },
    }
  }
export default HomeContainer;