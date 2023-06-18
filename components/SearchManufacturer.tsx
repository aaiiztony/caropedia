import { SearchManufacturerProps } from '@/types'
import React, { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import { manufacturers } from '@/constants/constants';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');
    const filteredManufacturers = query === '' ? manufacturers 
    : manufacturers.filter((item) => item
    .toLowerCase()
    .replace(/\s+/g, '')
    .includes(query.toLowerCase().replace(/\s+/g, '')))
    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                        src='/car-logo.png'
                        height={20}
                        width={20}
                        alt="Car Logo"/>
                    </Combobox.Button>
                    <Combobox.Input
                    className='search-manufacturer__input'
                    displayValue={(item:string)=>item}
                    onChange={(e)=>setQuery(e.target.value)}
                    />
                    <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={()=> setQuery('')}>
                      <Combobox.Options
                      className='absolute mt-1 max-h-60 overflow-auto w-full rounded-md bng-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                      static>
                        {filteredManufacturers.length === 0 && query !== "" ? (
                            <Combobox.Option
                            value={query}
                            className='search-manufacturer__option'>
                                Create "{query}"
                            </Combobox.Option>
                        ):(
                            filteredManufacturers.map((car)=> (
                                <Combobox.Option
                                value={car}
                                className={({active})=> `relative search-manufacturer__option ${active? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                key={car}>
                                    {({selected, active})=> (
                                        <>
                                        <span
                                        className={`block truncate ${selected? 'font-medium':'font-normal'}`}>{car}</span>
                                        {selected? (
                                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active?'text-white':'text-pribg-primary-purple'}`}>
                                            </span>
                                        ):null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>  
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer