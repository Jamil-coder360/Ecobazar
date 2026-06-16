import React, { useEffect, useState } from 'react'
import Section from '../global/Section';
import Container from '../global/Container';
import Button from '../global/Button';
import { ArrowRight } from 'lucide-react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {

    const [categories,setCategories]=useState([]);
      useEffect(() => {
    fetch("http://localhost:3000/categories")
    .then((res) => res.json())
    .then(data => setCategories(data))
      },[]);
 
      console.log(categories);

  return (
   <Section className="py-15">
    <Container>
        <div>
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900">
                    Popular Categories
                </h3>
                <Button variant={"transparent"} >View All <ArrowRight /> </Button>
            </div>
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
              <CategoriesCard key={category.id}   category={category} />
      ))}
      </div>
        </div>
    </Container>
   </Section>
  )
}

export default Categories