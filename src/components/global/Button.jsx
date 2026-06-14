import React from 'react'

const Button = ({Tagname ="button",children, className="" ,...props}) => {
  return (
    <Tagname {...props} className={`bg-white py-4 px-10 text-success_207 text-[16px] font-semibold leading-[120%] flex items-center gap-4 rounded-full ${className}`}>
        {children}
    </Tagname>
  )
}

export default Button