import axios from 'axios';
import {T} from "./types";

import {PRODUCT_SERVER} from "../components/utils/misc";

export const getProductsBySell = () => {
    //articles?sortBy=sold&order=desc&limit=4
    const request = axios.get(PRODUCT_SERVER+'/articles?sortBy=sold&order=desc&limit=4')
        .then(res=>res.data);
    return {
        type: T.GET_PRODUCTS_BY_SELL,
        payload: request,
    }
};
export const getProductsByArrival = () => {
    //articles?sortBy=createdAt&order=desc&limit=4
    const request = axios.get(PRODUCT_SERVER+'/articles?sortBy=createdAt&order=desc&limit=4')
        .then(res=>res.data);
    return{
        type: T.GET_PRODUCTS_BY_ARRIVAL,
        payload: request,
    };
};

///////////////////////////////
// Categories //
///////////////////////////////

export const getBrands =()=>{
    const request = axios.get(PRODUCT_SERVER + '/brands')
        .then(res=>res.data);
    return {
        type: T.GET_BRANDS,
        payload: request,
    }
};

export const getAttribute_name =()=>{
    const request = axios.get(PRODUCT_SERVER + '/attribute_name')
        .then(res=>res.data);
    return {
        type: T.GET_ATTRIBUTE_NAME,
        payload: request,
    }
};