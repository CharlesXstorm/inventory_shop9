import MenuHeader from '@/components/MenuHeader'
import NewPriceList from '@/components/NewPriceList'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='page'>
      <MenuHeader title="New Price List" />
      <NewPriceList />
    </div>
    </div>
  )
}

export default page
