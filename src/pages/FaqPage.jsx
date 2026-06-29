import { useState } from "react";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import faqs_1 from "../assets/faqs.png";
const faqs = [
  {
    question: "In elementum est a ante sodales iaculis.",
    answer:
      "Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultrices elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.",
  },
  {
    question: "Etiam lobortis massa eu nibh tempor elementum.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "In elementum est a ante sodales iaculis.",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    question: "Aenean quis quam nec lacus semper dignissim.",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    question: "Nulla tincidunt eros id tempus accumsan.",
    answer:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  },
];
const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Section className="pt-20">
      <Container>
        <div className="grid grid-cols-2 items-center">
          <div>
            <div className="max-w-xl mx-auto px-4 py-10 font-sans">
              {/* Heading */}
              <h1 className="text-[48px] font-semibold text-gray_900 leading-[120%] mb-8">
                Welcome, Let's Talk <br /> About Our Ecobazar
              </h1>

              {/* Accordion */}
              <div className="flex flex-col gap-3">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className={`border rounded-lg overflow-hidden transition-colors duration-200 bg-gray_50 ${
                        isOpen ? "border-success_207" : "border-gray_200"
                      }`}
                    >
                      {/* Question row */}
                      <button
                        onClick={() => toggle(index)}
                        aria-expanded={isOpen}
                        className={` w-full flex items-center justify-between gap-3 px-4 py-4 text-left transition-colors duration-150 ${isOpen ? "bg-white" : "bg-gray_50"}`}
                      >
                        <span
                          className={`text-[16px] font-medium leading-[150%] ${
                            isOpen
                              ? "text-green-700 font-medium "
                              : "text-gray_900 font-normal"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <span
                          className={`text-gray_900 w-10 h-10 flex items-center justify-center rounded-full border-0 text-base font-light transition-all duration-200 ${
                            isOpen ? " bg-gray_50 " : " bg-white "
                          }`}
                        >
                          {isOpen ? "×" : "+"}
                        </span>
                      </button>

                      {/* Answer panel */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-4 pb-4 pt-3 border-t border-gray-100 text-sm text-gray_600 leading-[150%] bg-white">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <img src={faqs_1} alt="" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FaqPage;
