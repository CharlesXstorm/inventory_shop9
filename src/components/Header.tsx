import React from 'react'
import Search from './ui/Search'
import Gutter from './ui/Gutter'
import Brand from './ui/Brand'

const Header = () => {
  return (
    <nav className="header">
      <div className='header__brand'>
        <Brand />
      </div>
      <Search />
      <div></div>
    </nav>
  )
}

export default Header