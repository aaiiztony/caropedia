import { MouseEventHandler } from "react";

export interface OptionProps {
    title: string;
    value:string
}
export interface CustomButtonProps {
    title: string;
    customStyles?: string;
    handleClick? : MouseEventHandler<HTMLButtonElement>
    isDisabled? : boolean;
    btnType? : "submit" | "button";
    textStyles? : string;
    rightIcon? : string;
}
export interface CustomFilterProps {
    title: string;
    customStyles?: string;
    options : OptionProps[]
}

export interface filterProps {
    manufacturer? : string;
    year? : number;
    model? :string;
    limit? :number;
    fuel?:string;
}

export interface HomeProps {
    searchParams : filterProps;
}
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer : (manufacturer:string) => void;
}
export interface CarProps {
    city_mpg:number;
    mpg :number;
    year:number;
    make:string;
    model:string;
    transmission:string;
    drive:string;
}
export interface CarDetailProps {
    closeModal:() => void
    isOpen:boolean
    car:CarProps
}
export interface ShowMoreProps {
    isNext: boolean;
    pageNumber:number
}