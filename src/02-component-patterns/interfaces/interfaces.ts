import { ReactElement } from "react";

export interface IProduct{
    id: string;
    title: string;
    img?: string;
}

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: IProduct;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: IProduct;
}

export interface ProductCardMainHOCProps {
    ({ children, product }: ProductCardProps ) : JSX.Element,
    Title: ({ title }: { title?: string; }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element,
}