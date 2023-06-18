"use client";

import Image from "next/image";
import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

const SearchButton = ({customClasses}:{customClasses?:string}) => {
  return (
    <button
    type="submit"
    className={`-ml-3 z-10 ${customClasses}`}>
      <Image
      className="object-contain"
      height={40}
      width={40}
      alt='Search Icon'
      src='/magnifying-glass.svg'
      />
    </button>
  )
}

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    
    const handleSubmit = () =>{}
  return (
    <form className='searchBar' onSubmit={handleSubmit}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
            <SearchButton customClasses='sm:hidden'/>
        </div>
        <div className="searchbar__item">
            <Image src='/model-icon.png' alt="vehicle model" height={25} width={25} 
            className="absolute w-[20px] h-[20px] ml-4"/>
            <input
            />
            <SearchButton customClasses='sm:hidden'/>
        </div>
            <SearchButton customClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar