import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "productList": [],
    "number": 3,
    "product":{},
    "imgList":[]
};

export const productSlice = createSlice({
        name:"productSlice",
        initialState,
        reducers: {
            setProductList(state, action){
                const { productList } = action.payload;
                state.productList = productList;
            },
            setProduct(state, action){
                const { pid } = action.payload;
                const [fdata] = state.productList.flat().filter( data => data.pid === pid ); // flat() => 2차원 배열을 1차원배열로 변경(3차원일경우 flat().flat())
                state.product = fdata;
            },
            setImgList(state){
                state.imgList = state.product.imgList;
            }
        }
    })

export const { setProductList, setProduct, setImgList } = productSlice.actions;

export default productSlice.reducer;