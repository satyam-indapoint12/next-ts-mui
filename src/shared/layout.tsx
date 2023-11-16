'use client';
import React from 'react';
import Header from './headers';
import Footer from './footer';
import Panel from './panel';
import MetaTags from './meta-tags';
import { Container } from '@mui/material';

const Layout = (props: any) => {
  const { metaData } = props;
  return (
    <MetaTags metaData={metaData}>
      <Header />
      <Panel />
      <Container sx={{ marginTop: { xs: 4, md: 10 }, marginBottom: 4 }}>
        {props.children}
      </Container>
      <Footer />
    </MetaTags>
  );
};

export default Layout;
