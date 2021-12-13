import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components/';


const product = {
    id: '1',
    title: 'Coffee Mug - ',
    img: 'coffee-mug.png'
}

export const ShoppingPage:React.FC = () => {
    return (
        <div>
            <h1> Store </h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <h1> Hello </h1>
                    <ProductImage />
                    <ProductTitle title={'LOL '+product.title}/>
                    <ProductButtons />
                </ProductCard>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
            
        </div>
    )
}
