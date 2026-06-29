import React from "react";
import Tags from "../icon/Tags";
import Admin from "../icon/Admin";
import Comment from "../icon/Comment";
import Button from "../global/Button";
import { ArrowRight } from "lucide-react";

const date = new Date();
const BlogCrad = ({ title, text, img }) => {
  return (
    <div className="bg-white max-w-[424px] overflow-hidden rounded-[8px] shadow-xl">
      <div className="w-[424px] h-[324px] relative">
        <img className="w-full h-full object-cover" src={img} alt="image" />

        {/* Date Badge */}
        <div className="absolute bottom-3 left-3 bg-white px-3 py-2 text-center shadow">
          <p className="text-lg font-bold leading-none">{date.getDate()}</p>
          <hr className="my-1" />
          <p className="text-sm font-bold leading-none uppercase">
            {date.toLocaleString("en-US", { month: "short" })}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1 text-[14px] leading-[150%] text-normal text-gray_600">
            {" "}
            <Tags /> Food
          </p>
          <p className="flex items-center gap-1 text-[14px] leading-[150%] text-normal text-gray_600">
            {" "}
            <Admin /> By Admin{" "}
          </p>
          <p className="flex items-center gap-1 text-[14px] leading-[150%] text-normal text-gray_600">
            {" "}
            <Comment /> 65 Comments
          </p>
        </div>

        <p className="mt-2 mb-5 text-[18px] leading-[150%] text-medium text-gray_900 hover:text-success_207 duration-300 ">
          {text}
        </p>
        <Button variant="transparent">
          Read More <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default BlogCrad;
