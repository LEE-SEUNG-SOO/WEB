import React, { useEffect, useState } from 'react';
import { ProductAvatar } from './ProductAvatar.jsx';
import { fetchData, axiosData, groupByRows } from '../../utils/fetchData.js';

export function ProductList() {
    const [rows, setRows] = useState([]);
    const [number, setNumber] = useState(3);

    useEffect( () => {
        const load = async () => {
            // axios.get("/data/products.json")
            //     .then(response => console.log(response.data))
            //     .catch(); // axios는 json패싱 작업 불필요

            // const jsonData = await fetchData("/data/products.json");
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setRows(rows);
        }
        load();
        
    },[number]);

    return (
        <div>
            {/* <div className='product-list'> */}
            {/* { list 
                && list.map( product => <ProductAvatar img={product.image}/>)
            } */}
            {
                rows && rows.map( (rowArray, idx) =>
                    <div className='product-list' key={idx}>
                        { rowArray && rowArray.map( product => 
                            <ProductAvatar img={product.image}/>
                        )}
                    </div>
                )
            }
        </div>
    );
}