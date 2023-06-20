import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants/constants'
import { HomeProps } from '@/types'
import { fetchCars } from '@/utils'
import React from 'react'

const Home = async ({searchParams}:HomeProps) => {
  const allCars = await fetchCars({
    manufacturer : searchParams.manufacturer||'Toyota',
    fuel : searchParams.fuel || '',
    year : searchParams.year || 2022,
    model : searchParams.model || 'corolla',
    limit : searchParams.limit || 12,
  })
  const isDataEmpty = !allCars || allCars.length < 1 || !Array.isArray(allCars);
  console.log(isDataEmpty);
  return (
    <main className='overflow-hidden'>
      <Hero/>
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className="home__text-container">
      <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
      <p>Explore out cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar/>
        <div className="home__filter-container">
          <CustomFilter title='fuel' options={fuels}/>
          <CustomFilter title='year' options={yearsOfProduction}/>
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car)=> (
              <CarCard car={car}/>
            ))}
          </div>
          <ShowMore
          pageNumber={(searchParams.limit || 12) / 12}
          isNext={(searchParams.limit || 12) > allCars.length}
        />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, something went wrong, refresh the page</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </div>
    </main>
  )
}
export default Home