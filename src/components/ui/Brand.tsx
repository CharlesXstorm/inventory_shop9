"use client"

import React from 'react'
import { s9, Svg } from '../svgs'
import { useStore } from '@/store'

const Brand = () => {
  const {displayMenu,setDisplayMenu} = useStore()
  return (
    <button className='header__brand__logo' onClick={()=> setDisplayMenu(!displayMenu)}>
      <Svg svg={s9} color="#F7941E" width='4em' />
      <span className='hamburger w-[80%]'></span>
      <span className='hamburger w-[50%]'></span>
    </button>
  )
}

export default Brand
