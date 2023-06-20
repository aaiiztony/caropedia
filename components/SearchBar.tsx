"use client";

import Image from "next/image";
import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
  //storing the manufacturer information from user input
  const [manufacturer, setManufacturer] = useState('');

  //storing the model information from user input
    const [model, setModel] = useState('');

    const router = useRouter();
  //handleSubmit utilises the handleSearchParams function to update the window.location.pathname 
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      if(manufacturer.trim() === '' && model.trim() === ''){
        return alert("Please provide valid input")
      }
      handleSearchParams(model.toLowerCase(),manufacturer.toLowerCase());
    }

    //handleSearchParams function with the model and mfg parameters update the URL of the path from next/navigation
    const handleSearchParams = (model:string, manufacturer:string) => {
      const searchParams = new URLSearchParams(window.location.search);
      //sets the manufacturer to user input. If user input is none, it deletes the current info from the url
      if(manufacturer){
        searchParams.set('manufacturer', manufacturer);
      }else{
        searchParams.delete(manufacturer);
      }
      //sets the model to user input. If user input is none, it deletes the current info from the url
      if(model){
        searchParams.set('model', model);
      }else{
        searchParams.delete(model);
      }
      const newPath = `${window.location.pathname}?${searchParams.toString()}`
      router.push(newPath);
    }
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
            <SearchButton customClasses='sm:hidden'/>
        </div>
        <div className="searchbar__item">
            <Image src='/model-icon.png' alt="vehicle model" height={25} width={25} 
            className="absolute w-[20px] h-[20px] ml-4"/>
            <input
            className='searchbar__input'
            type='text'
            name='model'
            value={model}
            onChange={(e)=> setModel(e.target.value)}
            placeholder="Corolla.."
            />
            <SearchButton customClasses='sm:hidden'/>
        </div>
            <SearchButton customClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar