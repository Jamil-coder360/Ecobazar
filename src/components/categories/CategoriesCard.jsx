import React from 'react'
import ctg from "../../assets/ctg.png"
const CategoriesCard = ({category}) => {
  return (
<div className="group flex flex-col items-center px-2 pt-4 border border-gray_100 w-[200px] rounded-[5px] hover:border-success_dark hover:shadow-xl hover:shadow-success_dark transition-all duration-300">
        <div className="w-[190px] h-[130px] overflow-hidden">
            <img src={category.icon} alt=""  className="w-full h-full " />

        </div>
        <p className="font-medium text-[18px] leading-[150%] text-gray_900 pt-4 pb-6 group-hover:text-success_dark">{category.label}</p>
    </div>
  )
}

export default CategoriesCard