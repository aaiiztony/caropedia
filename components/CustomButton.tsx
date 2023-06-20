'use client';

import { CustomButtonProps } from '@/types'
import Image from 'next/image';
import React from 'react'

const CustomButton= ({isDisabled, title, btnType, textStyles, rightIcon, customStyles, handleClick}:CustomButtonProps) => {
  return (
    <button 
    disabled = {isDisabled}
    type={btnType||"button"}
    className={`custom-btn ${customStyles}`} onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
          src={rightIcon}
          alt='arrow_left'
          fill
          className='object-contain'
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton