import React from 'react'
import { Link } from 'react-router'
import ctg from "../../assets/ctg.png"
const CategoriesCard = ({category}) => {
  return (
    // className=""
<Link
  to={`/shop?category=${encodeURIComponent(category.slug)}`}
  className="group flex flex-col items-center px-2 pt-4 border border-gray_100 w-50 rounded-[5px] hover:border-success_dark hover:shadow-[0_0_12px] hover:shadow-success_dark transition-all duration-300"
>
        <div className="w-47.5 h-32.5 overflow-hidden">
            <img src={category.icon} alt=""  className="w-full h-full " />

        </div>
        <p className="font-medium text-[18px] leading-[150%] text-gray_900 pt-4 pb-6 group-hover:text-success_dark">{category.label}</p>
    </Link>
  )
}

export default CategoriesCard