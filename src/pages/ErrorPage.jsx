import React from 'react'
import error from "../assets/error.png"
import Section from '../components/global/Section';
import Container from '../components/global/Container';
import Button from '../components/global/Button';
import PageHading from '../components/global/PageHading';
const ErrorPage = () => {
  return (<>
    <PageHading pagename="404 Error Page" />
    <Section className="py-10 lg:py-20">
        <Container>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <img src={error} alt="" />
                </div>
                   <h3 className="font-semibold text-[20px] lg:text-[40px] leading-[120%] text-gray_900 pt-8 pb-5">
                 Oops! page not found
                </h3>
                   <p className="font-normal text-[10px] lg:text-[16px] leading-[150%] text-gray_500 pb-6">
                 Oops! page not found
                </p>
                <Button Tagname="a" href="/" variant="green">
                    Back to Home
                </Button>
            </div>
        </Container>
    </Section>
  </>
  )
}

export default ErrorPage