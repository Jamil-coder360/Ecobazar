import React from 'react'
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Categories from '../components/categories/Categories';
import Product from '../components/product/Product';
import Follow from '../components/Follow';
import HotDeal from '../components/product/HotDeal';
import Bannar from '../components/Bannar';
import DiscountBannar from '../components/DiscountBannar';
import Featured from '../components/product/Featured';

const HomePage = () => {
  return (
    <>
    <Hero />
    <Feature />
    <Categories />
    <Product />
    <Bannar />
    <DiscountBannar />
    <Featured />
    <HotDeal />
    <Follow />
    </>
  )
}

export default HomePage