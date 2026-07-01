import React from "react";
import BlogCrad from "./BlogCrad";
import blog_1 from "../../assets/blog_1.png";
import blog_2 from "../../assets/blog_2.png";
import blog_3 from "../../assets/blog_3.png";
import Section from "../global/Section";
import Container from "../global/Container";

const blogData = [
  {
    id: 1,
    title: "loremmdas",
    text: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    img: blog_1,
  },
  {
    id: 2,
    title: "loremmdas",
    text: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    img: blog_2,
  },
  {
    id: 3,
    title: "loremmdas",
    text: "Maecenas blandit risus elementum mauris malesuada.",
    img: blog_3,
  },
];
const Blog = () => {
  return (
    <Section className="py-15">
      <Container>
        <div>
          <div className="flex items-center justify-center pb-8">
            <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900">
              Latest News
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {blogData.map((item) => (
              <BlogCrad
                key={item.id}
                img={item.img}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Blog;
