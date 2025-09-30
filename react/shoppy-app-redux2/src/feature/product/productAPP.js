import { setProductList, setProduct, setImgList  } from "./productSlice.js";
import { axiosData, groupByRows } from "../../utils/fetchData.js";

export const getProductList = (number) => async (dispatch) => {
    const jsonData = await axiosData("/data/products.json");
    const productList = groupByRows(jsonData, number);
    dispatch(setProductList({"productList":productList}));
}

export const getFilter = (pid) => async (dispatch) => {
    dispatch(setProduct({"pid":pid}));
    dispatch(setImgList());
}