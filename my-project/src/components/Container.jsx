import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`container mx-auto ${className} px-2` }>
        {children}
      
    </div>
  )
}

export default Container
