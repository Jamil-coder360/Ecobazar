import React from 'react'

const Section = ({children ,className="", ...props}) => {
  return (
    <section {...props} className={` ${className}`}>
        {children}
    </section>
  )
}

export default Section