import {
  FETCH_PRODUCTS,
  FETCH_CATEGORIES,
  CURRENT_PAGE,
  SET_CURRENT_PAGE,
  SET_CATEGORY,
  FETCH_PRODUCT
} from "./types";
import _ from "lodash";


import { getProducts, getProduct } from "../_services/products";
import { getCategories } from "../_services/category";



const fetchProducts = () => async (dispatch) => {
    const response = await getProducts();

    dispatch({
        type: FETCH_PRODUCTS,
        payload: response,
    });
};

// fetch product with id
const fetchProduct = (id) => async (dispatch) => {
    const response = await getProduct(id);

    dispatch({
    type: FETCH_PRODUCT,
    payload: response,
});
};

// fetch categories
const fetchCategories = () => async (dispatch) => {
    const response = await getCategories();

    dispatch({
        type: FETCH_CATEGORIES,
        payload: response,
    });
};

// ACTIONS DEALING WITH PAGINATION
// get current page

const currentPage = () => ({
    type: CURRENT_PAGE,
});

// set current page
const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
});

//    END //

// ACTIONS DEALING WITH SELECTION CATEGORY //
// set category
const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category,
});


export const productActions = {
    fetchProduct,
    fetchProducts,
    fetchCategories,
    currentPage,
    setCurrentPage,
    setCategory
};
