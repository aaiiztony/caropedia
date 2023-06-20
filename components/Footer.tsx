import { footerLinks } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
          src='/logo.svg'
          width={118}
          height={18}
          alt='logo'
          className='object-contain'
          />
          <p className="text-base text-gray-700">
            Caropedia 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((items)=> (
            <div key={items.title+items.links} className="footer__link">
              <h3 className="font-bold">{items.title}</h3>
              <div className="flex-col flex gap-5">
                {items.links.map((link)=>(
                  <Link
                  key={link.title}
                  href={link.url}
                  className='text-gray-500'>{link.title}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10"></div>
      <p>@2023 Caropedia. All rights reserved</p>
      <div className="footer__copyrights-link mb-2">
        <Link href='/' className='text-gray-500'>Privacy & Policy</Link>
        <Link href='/' className='text-gray-500'>Terms & Condition</Link>
      </div>
    </footer>
  )

export default Footer