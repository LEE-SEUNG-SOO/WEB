import React, { useContext, useEffect } from 'react';
import { ProductAvatar } from './ProductAvatar.jsx';
import { Link } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct.js';
import { ProductContext } from '../../context/ProductContext.js';

export function ProductList() {
    const { productList, number } = useContext(ProductContext); 
    const { getProductList } = useProduct();

    useEffect( () => {
       getProductList();
    },[number]);

    return (
        <div>
            {
                productList && productList.map( (productArray, idx) =>
                    <div className='product-list' key={idx}>
                        { productArray && productArray.map( product => 
                            <Link to={`/products/${product.pid}`}><ProductAvatar img={product.image}/></Link>
                        )}
                    </div>
                )
            }
        </div>
    );
}