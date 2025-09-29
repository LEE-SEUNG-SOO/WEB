import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext.js';
import { axiosData, groupByRows } from '../utils/fetchData.js';

export function useProduct() {
    const { productList, setProductList, number, setProduct, setImgList } = useContext(ProductContext);

    const getProductList = () => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setProductList(rows);
        }
        load();
    }

    const getFillter = (pid) => {
        const [fdata] = productList.flat().filter( data => data.pid === pid); // fillter는 배열로 리턴!!
        setProduct(fdata);
        setImgList(fdata.imgList);
    }

    return { getProductList, getFillter };
}

