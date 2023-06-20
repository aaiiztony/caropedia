"use client";

import { CarProps } from '@/types';
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import CarDetailModal from './CarDetailModal';
import CustomButton from './CustomButton';

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  //destructuring to get the variables from car object passed as a parameter 
  const { city_mpg, year, make, model, transmission, drive } = car;

  //using the calculateCarRent function from @utils 
  const fareRate = calculateCarRent(city_mpg, year);

  // isObject state to remember the modal open state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='car-card group'>
      <div className="car-card__content">
        <h2 className="car-content__content-title capitalize">
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 font-extrabold text-[32px] leading-[38px]'>
        <span className="self-start text-[14px] leading-[17px] font-semibold">&#8377;</span>
        {fareRate}
        <span className="self-end text-[14px] leading-[17px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-30 my-3 object-contain">
        {/* IMAGIN API (for images) REGISTRATION REQUIRES BUSINESS EMAIL :| */}
        {/* <Image src={generateCarImageUrl(car)} alt='car model' height={100} width={300} className='object-contain'/> */}
        <Image src={`/hero.png`} alt='car model' height={100} width={300} className='object-contain' />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className="text-[14px] leading-[17px]">
              {transmission === 'a' ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src='/tire.svg' width={20} height={20} alt='drive' />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src='/gas.svg' width={20} height={20} alt='mileage' />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute cursor-pointer w-full">
          <CustomButton
            title='View More'
            customStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)} />
        </div>
      </div>
      <CarDetailModal car={car} isOpen={isOpen} closeModal={()=> setIsOpen(false)}/>
    </div>
  )
}

export default CarCard