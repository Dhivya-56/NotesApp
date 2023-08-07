import React from 'react'

const Footer = () => {
    const years = new Date();
  return (
    <div className='foot'>
      <p>Copyright &copy; {years.getFullYear()}</p>
    </div>
  )
}

export default Footer
