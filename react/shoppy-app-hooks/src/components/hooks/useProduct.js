import { useContext } from "react";
import { axiosData, groupByRows } from "../../utils/fetchData.js";
import { ProductContext } from "../../context/ProductContext.js";

export const useProduct = () => {
    const { setRows, number, setProduct, setImgList } = useContext(ProductContext);

    const getProductList = () => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setRows(rows);
        }
        load();
    }

    const getFilter = (pid) => {
        const fillter = async () => {
                const jsonData = await axiosData("/data/products.json");
                const [fdata] = await jsonData.filter( data => data.pid === pid); // fillter는 배열로 리턴!!
                setProduct(fdata);
                setImgList(fdata.imgList);
            }
            fillter();

        };

    return(
        { getProductList, getFilter }
    );
};