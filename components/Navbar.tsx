"use client";

import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  const handleSignIn = () => {
    console.log('Will sign you on blockchain soon!')
  }
  return (
    <header className='w-full absolute z-10'>
      <div className="flex-between padding-x padding-y">
      <Image src='/logo.svg' width={115} height={115} alt='logo__image'/>
      <CustomButton
      title='Sign In'
      handleClick={handleSignIn}
      customStyles='text-primary-blue bg-white rounded-full min-w-[130px]'/>
      </div>
    </header>
  )
}

export default Navbar