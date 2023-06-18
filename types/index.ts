import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    customStyles: string;
    handleClick? : MouseEventHandler<HTMLButtonElement>
}
export interface filterProps {
    manufacture? : string;
    year? : number;
    model? :string;
    limit? :number;
    fuel?:number;
}

export interface HomeProps {
    searchParams : filterProps;
}
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer : (manufacturer:string) => void;
}