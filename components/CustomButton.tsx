'use client';

import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton= ({title, customStyles, handleClick}:CustomButtonProps) => {
  return (
    <button className={`custom-btn ${customStyles}`} onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomButton
