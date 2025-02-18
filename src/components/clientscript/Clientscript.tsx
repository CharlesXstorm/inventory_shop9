"use client"

import { formatTooltip } from '@/script'
import React, { useEffect } from 'react'

const Clientscript = () => {
    useEffect(()=>{
        formatTooltip()
    },[])
  return (
    null
  )
}

export default Clientscript
