import React, { createContext, useContext } from 'react'

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { ProductContextProps } from '../interfaces/interfaces';
import { ProductContext } from './ProductCard';

export const ProductImage = (  { img = '' }  ) => {

    const { product } = useContext( ProductContext );

    let imgToShow = '';

    if( img ){
        imgToShow = img;
    } else if( product.img ){
        imgToShow = product.img;
    }

    return (
        <img className={ styles.productImg } src={ imgToShow ? imgToShow : noImage } alt="Product Image" /> 
    )
}