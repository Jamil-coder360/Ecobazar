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
import Blog from '../components/blog/Blog';
import Testimonial from '../components/testimonial/Testimonial';
import CompanyLogo from '../components/CompanyLogo';

const HomePage = () => {
  return (
    <>
    <Hero />
    <Feature />
    <Categories />
    <Product />
    <Bannar />
    <HotDeal />
    <DiscountBannar />
    <Featured />
    <Blog />
    <Testimonial />
    <CompanyLogo />
    <Follow />
    </>
  )
}

export default HomePage