import React from 'react'
import Section from '../global/Section';
import Container from '../global/Container';
import Button from '../global/Button';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  return (
   <Section>
    <Container>
        <div>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900">
                    Popular Categories
                </h3>
                <Button variant={"transparent"} >View All <ArrowRight /> </Button>
            </div>
        </div>
    </Container>
   </Section>
  )
}

export default Categories