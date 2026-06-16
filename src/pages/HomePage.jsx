import React from 'react'
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Categories from '../components/categories/Categories';
import Product from '../components/product/Product';
import Follow from '../components/Follow';

const HomePage = () => {
  return (
    <>
    <Hero />
    <Feature />
    <Categories />
    <Product />
    <Follow />
    </>
  )
}

export default HomePage