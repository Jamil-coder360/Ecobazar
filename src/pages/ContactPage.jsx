import React from "react";
import con_1 from "../assets/con_1.png";
import con_2 from "../assets/con_2.png";
import con_3 from "../assets/con_3.png";
import PageHading from "../components/global/PageHading";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import Button from "../components/global/Button";

const ContactPage = () => {
  return (
    <>
      <PageHading pagename="contact" />
      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[312px_auto] gap-6">
            <div className="py-5 bg-white rounded-[8px] shadow-xl">
              <div className="flex flex-col items-center justify-center p-6 after:content-[''] after:block after:w-full  after:border-b after:border-gray_100   after:bottom-0 relative after:absolute">
                <div className="pb-4 ">
                  <img src={con_1} alt="" />
                </div>
                <p className="text-[16px] text-gray_800 text-center leading-[150%] font-normal">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </p>
              </div>
              <div className='flex flex-col items-center justify-center p-6 after:content-[""] after:block after:w-full  after:border-b after:border-gray_100 after:bottom-0 relative after:absolute'>
                <div className="pb-4 ">
                  <img src={con_2} alt="" />
                </div>
                <p className="text-[16px] text-gray_800 text-center leading-[150%] font-normal">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-6">
                <div className="pb-4 ">
                  <img src={con_3} alt="" />
                </div>
                <p className="text-[16px] text-gray_800 text-center leading-[150%] font-normal">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[8px] p-12.5 shadow-2xl">
              <h3 className="text-[24px] text-gray_900  leading-[150%] font-semibold pb-2">
                Just Say Hello!
              </h3>
              <p className="text-[14px] text-gray_500  leading-[150%] font-normal max-w-[486px] pb-6">
                Do you fancy saying hi to me or you want to get started with
                your project and you need my help? Feel free to contact me.
              </p>
              <form action="">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Template Cookie"
                    className="py-3.5 px-4 border border-gray_100 text-gray_600  rounded-[6px] w-full"
                  />
                  <input
                    type="text"
                    placeholder="zakirsoft@gmail.com"
                    className="py-3.5 px-4 border border-gray_100 text-gray_600  rounded-[6px] w-full"
                  />
                  <input
                    type="text"
                    placeholder=" Hello|"
                    className="py-3.5 px-4 border border-gray_100 text-gray_600  rounded-[6px] w-full col-span-2"
                  />
                  <textarea
                    placeholder="Hello..."
                    rows={3}
                    className="col-span-2 py-3.5 px-4 border border-gray_100 rounded-[6px] resize-none"
                  />
                </div>
                <Button variant="green" className="mt-6">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.898191459817!2d90.41805749372777!3d23.820409114490438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64e5249ad39%3A0x2392867b037e718e!2sKuril%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1782755779086!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="rounded-lg"
        ></iframe>
      </Section>
    </>
  );
};

export default ContactPage;
