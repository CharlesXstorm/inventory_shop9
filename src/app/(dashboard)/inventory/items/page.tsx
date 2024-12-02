
import Items from '@/components/Items'
import MenuHeader from '@/components/MenuHeader'
import React from 'react'

const page = () => {
  return (
    <div className='page'>
      <MenuHeader title={"Active Items"} toggle main />
      <Items />
    </div>
  )
}

export default page
