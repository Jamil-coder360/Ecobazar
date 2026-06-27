import React from "react";

const Button = ({
  as: Tagname = "button",
  children,
  className = "",
  variant = "white",
  ...props
}) => {
  const variantClasses = {
    transparent: "bg-transparent text-success_207 !p-0",
    green: "bg-success_207 text-white",
    white: "bg-white text-success_207 border border-[#000000]/40 rounded",
  };

  return (
    <Tagname
      {...props}
      className={`
        ${variantClasses[variant]}
        py-4 px-10
        text-[16px]
        font-semibold
        leading-[120%]
        flex items-center
        justify-center
        gap-4
        rounded-full
        ${className}
      `}
    >
      {children}
    </Tagname>
  );
};

export default Button;
