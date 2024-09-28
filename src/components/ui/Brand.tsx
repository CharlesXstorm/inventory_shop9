import React from 'react'
import { s9, Svg } from '../svgs'

const Brand = () => {
  return (
    <button className='header__brand__logo'>
      <Svg svg={s9} color="#F7941E" width='4em' />
      <span className='hamburger'></span>
      <span className='hamburger'></span>
    </button>
  )
}

export default Brand
