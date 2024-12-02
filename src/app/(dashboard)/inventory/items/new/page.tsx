import MenuHeader from '@/components/MenuHeader'
import NewItem from '@/components/NewItem'
import React from 'react'

const page = () => {
  return (
    <div className='page'>
      <MenuHeader title="New Item" />
      <NewItem />
    </div>
  )
}

export default page
