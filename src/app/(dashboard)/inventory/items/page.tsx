"use client"

import Items from '@/components/Items'
import MenuHeader from '@/components/MenuHeader'
import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
  const pathname = usePathname()
  
  return (
    <div className='page'>
      <MenuHeader title={"Active Items"} toggle main path={pathname} />
      <Items />
    </div>
  )
}

export default page
