

"use client"
import { Container, Grid } from '@mui/material';
import * as React from 'react';
import CardView from '../../shared/cards';
import { convertIstToUtc, priceWithCurrency } from '../../utilities/helper';

interface Product {
    title: string, description: string, image: string, price: string
}


const Home = ({
    products
}: {products: Product[]}) => {
    return <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
            {products.map(({ title, description, image, price }: Product) => <CardView key={title} title={title} description={description} image={image} >
                <p>{convertIstToUtc(new Date(),'DD MMM YYYY hh:mm')}</p>
                <p>{priceWithCurrency(price, 'PKR')}</p>
            </CardView>)}
        </Grid>
    </Container>
}

export default Home;
