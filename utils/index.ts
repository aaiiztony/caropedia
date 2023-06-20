import { CarProps, filterProps } from "@/types";
const baseUrl = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?';

export const updatedSearchParams = (type:string, value:string) => {
  const searchParams = new URLSearchParams(window.location.href);
  searchParams.set(type, value);
  const newPath = `${window.location.pathname}?${searchParams.toString()}`;
  return newPath;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 796; 
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const fetchCars = async (filters: filterProps) =>{
    const {manufacturer, fuel, year, model, limit} = filters;
    const headers: HeadersInit =  {
        'X-RapidAPI-Key': 'a2636b10f8msh585d2152c69a9cdp187843jsnac233565b07b',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    const response = await fetch (
        `${baseUrl}make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {headers:headers},
      )
    const data = response.json();
    console.info(data)
    return data;
}


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
} 