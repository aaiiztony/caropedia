'use client'

import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

const Home = () => {
    //scrolls to the main content of the page ie the Car Explore Section
    const handleScroll = () => {
        const nextSection = document.getElementById('discover');
        if (nextSection){
            nextSection.scrollIntoView({
                behavior:'smooth',})
        }
    }
    return (
            <div className="hero">
                <div className="pt-36 padding-x flex-1">
                    <h1 className='hero__title'>
                        Find, book, rent a car—quick and super easy!
                    </h1>
                    <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
                    <CustomButton
                    title='Explore More'
                    customStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={handleScroll}
                    />
                </div>
                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image src='/hero.png' alt='car' className='object-contain' fill/>
                    </div>
                    <div className='hero__image-overlay' />
                </div>
            </div>
    )
}

export default Home